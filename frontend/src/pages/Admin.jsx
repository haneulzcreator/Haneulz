import React, { useState, useEffect, useRef } from "react";
import { getSettings, updateSettings, formatApiError, api } from "../lib/api";

// 💡 ENHANCED YOUTUBE THUMBNAIL HELPER
// Supports standard, shortener, embed, and YouTube Shorts links
export const getYouTubeThumbnail = (url) => {
  if (!url) return null;
  const regExp = /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  if (match && match[1] && match[1].length === 11) {
    return `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`;
  }
  return null;
};

export default function Admin() {
  // SECTION 1 STATES: NEW POST / VARIETY SUBMISSION
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [publishingPost, setPublishingPost] = useState(false);
  const [postStatus, setPostStatus] = useState(null);
  const fileInputRef = useRef(null);

// MEMORY GAME STATES
const [memoryTitle, setMemoryTitle] = useState("");
const [memoryImage, setMemoryImage] = useState(null);
  
  // SECTION 2 STATES: PENDING AU SUBMISSIONS & MODAL + SEARCH/FILTER
  const [pendingAus, setPendingAus] = useState([]);
  const [loadingPending, setLoadingPending] = useState(true);
  const [auActionStatus, setAuActionStatus] = useState(null);
  const [selectedAuModal, setSelectedAuModal] = useState(null);

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  // SECTION 3 STATES: SITE CONTENT SETTINGS
  const [initialSettings, setInitialSettings] = useState({});
  const [siteSettings, setSiteSettings] = useState({
    hero_title: "",
    hero_description: "",
    whole_group_title: "NOW, THE WHOLE GROUP",
    whole_group_desc:
      "Beyond the duets — all of AHOF. From here the spotlight widens to the whole group. These playlists celebrate AHOF as nine — anniversaries, music videos and everything the boys do together.",
    about_title: "Our Little Corner",
    about_subtitle: "",
    about_letter: "",
    about_signoff_text: "",
    about_signoff_author: "",
  });
  const [loadingSettings, setLoadingSettings] = useState(true);
  const [savingSettings, setSavingSettings] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  // Auto-calculated YouTube Thumbnail preview
  const autoYoutubeThumbnail = getYouTubeThumbnail(sourceUrl);

  const showAuNotification = (type, text) => {
    setAuActionStatus({ type, text });
    setTimeout(() => setAuActionStatus(null), 4000);
  };

  const isSettingsDirty = JSON.stringify(siteSettings) !== JSON.stringify(initialSettings);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isSettingsDirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isSettingsDirty]);

  useEffect(() => {
    async function fetchData() {
      try {
        const settingsData = await getSettings();
        if (settingsData) {
          setSiteSettings((prev) => ({ ...prev, ...settingsData }));
          setInitialSettings((prev) => ({ ...prev, ...settingsData }));
        }
      } catch (err) {
        console.error("Error loading settings:", err);
      } finally {
        setLoadingSettings(false);
      }

      try {
        const response = await api.get("/admin/pending-aus");
        setPendingAus(response.data || []);
      } catch (err) {
        console.error("Error loading pending AUs:", err);
      } finally {
        setLoadingPending(false);
      }
    }
    fetchData();
  }, []);

  // Section 1: Publish Handler
  const handlePublishPost = async (e) => {
    e.preventDefault();
    setPublishingPost(true);
    setPostStatus(null);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("sourceUrl", sourceUrl);
      if (imageFile) {formData.append("image", imageFile);} else if (autoYoutubeThumbnail) {formData.append("thumbnailUrl", autoYoutubeThumbnail);}

      await api.post("/admin/posts", formData);

      setPostStatus({ type: "success", text: "Post published successfully! 🌸" });
      setTitle("");
      setDescription("");
      setSourceUrl("");
      setImageFile(null);
      setPreviewUrl(null);
    } catch (err) {
      setPostStatus({ type: "error", text: formatApiError(err) });
    } finally {
      setPublishingPost(false);
    }
  };

  // Filtered AUs calculation
  const genres = ["All", ...Array.from(new Set(pendingAus.map((au) => au.genre || "AU")))];
  const filteredAus = pendingAus.filter((au) => {
    const matchesSearch =
      au.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      au.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      au.summary?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "All" || (au.genre || "AU") === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  // Handlers for AU actions
  const handleApproveAU = async (id) => {
    const targetAu = pendingAus.find((au) => (au.id || au._id) === id);
    setPendingAus((prev) => prev.filter((au) => (au.id || au._id) !== id));
    showAuNotification("success", `Approved "${targetAu?.title || "AU"}"! ☁️💗`);
    if (selectedAuModal && (selectedAuModal.id || selectedAuModal._id) === id) setSelectedAuModal(null);
    try {
      await api.post(`/admin/approve-au/${id}`);
    } catch (err) {
      if (targetAu) setPendingAus((prev) => [targetAu, ...prev]);
      showAuNotification("error", "Failed to approve AU on server.");
    }
  };

  const handleDeleteAU = async (id) => {
    const targetAu = pendingAus.find((au) => (au.id || au._id) === id);
    setPendingAus((prev) => prev.filter((au) => (au.id || au._id) !== id));
    showAuNotification("info", "Submission removed.");
    if (selectedAuModal && (selectedAuModal.id || selectedAuModal._id) === id) setSelectedAuModal(null);
    try {
      await api.delete(`/admin/au/${id}`);
    } catch (err) {
      if (targetAu) setPendingAus((prev) => [targetAu, ...prev]);
      showAuNotification("error", "Failed to delete AU on server.");
    }
  };

// MEMORY GAME UPLOAD
const handleAddMemoryCard = async (e) => {
  e.preventDefault();

  if (!memoryImage) {
    alert("Please select an image");
    return;
  }

  const formData = new FormData();

  formData.append("title", memoryTitle);
  formData.append("image", memoryImage);

  try {
    await api.post("/admin/memory-cards", formData);

    alert("Memory card added ☁️💗");

    setMemoryTitle("");
    setMemoryImage(null);

  } catch (err) {
    console.error(err);
    alert("Failed adding card");
  }
};


// Handler for Saving Site Content Settings
const handleSaveSettings = async (e) => {
    e.preventDefault();
    setSavingSettings(true);
    setStatusMessage(null);
    try {
      await updateSettings(siteSettings);
      setInitialSettings(siteSettings);
      setStatusMessage({ type: "success", text: "Site settings updated successfully! ☁️" });
    } catch (err) {
      setStatusMessage({ type: "error", text: formatApiError(err) });
    } finally {
      setSavingSettings(false);
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>Haneulz Corner Admin Panel ☁️</h1>

      {/* SECTION 1: ADD CONTENT / VARIETY */}
      <section style={{ marginBottom: "40px", padding: "20px", border: "1px solid #f8bbd0", borderRadius: "12px", background: "#fff" }}>
        <h2 style={{ color: "#d81b60", marginTop: 0 }}>Add Variety / Video Post 🎵</h2>

        {postStatus && (
          <div style={{ padding: "10px", marginBottom: "16px", borderRadius: "8px", fontWeight: "bold", backgroundColor: postStatus.type === "success" ? "#E8F5E9" : "#FFEBEE", color: postStatus.type === "success" ? "#2E7D32" : "#C62828" }}>
            {postStatus.text}
          </div>
        )}

        <form onSubmit={handlePublishPost}>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ fontWeight: "bold", display: "block", marginBottom: "6px" }}>Title</label>
            <input
              type="text"
              required
              placeholder="Post title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #f48fb1", boxSizing: "border-box" }}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label style={{ fontWeight: "bold", display: "block", marginBottom: "6px" }}>Description</label>
            <textarea
              rows={3}
              placeholder="Short description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #f48fb1", boxSizing: "border-box" }}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
  <label style={{ fontWeight: "bold", display: "block", marginBottom: "6px" }}>
    Source Link 🔗
  </label>

  <input
    type="text"
    placeholder="https://original-website.com/post"
    value={sourceUrl}
    onChange={(e) => setSourceUrl(e.target.value)}
    style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", border: "1px solid #f48fb1", boxSizing: "border-box" }}
  />
</div>

          {/* Live Auto Thumbnail Preview */}
          {autoYoutubeThumbnail && (
            <div style={{ marginBottom: "16px", padding: "12px", background: "#fff5f8", borderRadius: "8px", textAlign: "center" }}>
              <p style={{ margin: "0 0 8px 0", fontSize: "0.85rem", color: "#d81b60", fontWeight: "bold" }}>
                ✨ Auto-generated YouTube Thumbnail:
              </p>
              <img
                src={autoYoutubeThumbnail}
                alt="YouTube Preview"
                style={{ width: "100%", maxHeight: "200px", objectFit: "cover", borderRadius: "6px" }}
                onError={(e) => {
                  if (e.target.src.includes("maxresdefault.jpg")) {
                    e.target.src = e.target.src.replace("maxresdefault.jpg", "hqdefault.jpg");
                  } else {
                    e.target.style.display = "none";
                  }
                }}
              />
            </div>
          )}

          <button
            type="submit"
            disabled={publishingPost}
            style={{ padding: "10px 20px", backgroundColor: "#d81b60", color: "#fff", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}
          >
            {publishingPost ? "Publishing..." : "Publish Post"}
          </button>
        </form>
      </section>

{/* MEMORY GAME SECTION */}
<section style={{ 
  marginBottom: "40px", 
  padding: "20px", 
  border: "1px solid #f8bbd0", 
  borderRadius: "12px", 
  background: "#fff" 
}}>
  <h2 style={{ color: "#d81b60", marginTop: 0 }}>
    Add Memory Game Card 🧩
  </h2>

  <form onSubmit={handleAddMemoryCard}>

    <div style={{ marginBottom: "16px" }}>
      <label style={{ fontWeight: "bold", display: "block", marginBottom: "6px" }}>
        Card Title
      </label>

      <input
        type="text"
        required
        placeholder="Example: Zhang Hao"
        value={memoryTitle}
        onChange={(e) => setMemoryTitle(e.target.value)}
        style={{
          width: "100%",
          padding: "8px 12px",
          borderRadius: "6px",
          border: "1px solid #f48fb1"
        }}
      />
    </div>


    <div style={{ marginBottom: "16px" }}>
      <label style={{ fontWeight: "bold", display: "block", marginBottom: "6px" }}>
        Card Image
      </label>

      <input
        type="file"
        accept="image/*"
        required
        onChange={(e) => setMemoryImage(e.target.files[0])}
      />
    </div>


    <button
      type="submit"
      style={{
        padding: "10px 20px",
        backgroundColor:"#d81b60",
        color:"#fff",
        border:"none",
        borderRadius:"8px",
        fontWeight:"bold",
        cursor:"pointer"
      }}
    >
      Add Memory Card ☁️
    </button>

  </form>
</section>
      
      {/* SECTION 2: PENDING AUs WITH SEARCH & FILTER */}
      <section style={{ marginBottom: "40px", padding: "20px", border: "1px solid #f8bbd0", borderRadius: "12px", background: "#fff5f8" }}>
        <h2 style={{ color: "#d81b60", marginTop: 0 }}>
          Pending AU Submissions ({filteredAus.length}/{pendingAus.length}) ☁️
        </h2>

        <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
          <input
            type="text"
            placeholder="Search by title, author, or summary..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ flex: 1, padding: "8px 12px", borderRadius: "6px", border: "1px solid #f48fb1" }}
          />
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            style={{ padding: "8px 12px", borderRadius: "6px", border: "1px solid #f48fb1", background: "#fff" }}
          >
            {genres.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>

        {auActionStatus && (
          <div style={{ padding: "10px", marginBottom: "16px", borderRadius: "8px", fontWeight: "bold", backgroundColor: auActionStatus.type === "success" ? "#E8F5E9" : "#FFEBEE", color: auActionStatus.type === "success" ? "#2E7D32" : "#C62828" }}>
            {auActionStatus.text}
          </div>
        )}

        {loadingPending ? (
          <p>Loading pending submissions...</p>
        ) : filteredAus.length === 0 ? (
          <p style={{ fontStyle: "italic", color: "#666" }}>No matching AU submissions found.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxHeight: "520px", overflowY: "auto" }}>
            {filteredAus.map((au) => {
              const auId = au.id || au._id;
              return (
                <div key={auId} style={{ padding: "16px", background: "#fff", border: "1px solid #f48fb1", borderRadius: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3 style={{ margin: 0 }}>{au.title}</h3>
                    <span style={{ fontSize: "0.8rem", color: "#d81b60", fontWeight: "bold" }}>{au.genre || "AU"}</span>
                  </div>
                  <p style={{ margin: "4px 0", fontSize: "0.9rem", color: "#666" }}>By: <strong>{au.author || "Anonymous"}</strong></p>
                  <p style={{ margin: "4px 0", fontSize: "0.95rem" }}>{au.summary}</p>
                  <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
                    <button onClick={() => handleApproveAU(auId)} style={{ padding: "6px 12px", backgroundColor: "#d81b60", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>
                      Approve
                    </button>
                    <button onClick={() => handleDeleteAU(auId)} style={{ padding: "6px 12px", backgroundColor: "#fff", color: "#c62828", border: "1px solid #c62828", borderRadius: "6px", cursor: "pointer" }}>
                      Delete
                    </button>
                    <button onClick={() => setSelectedAuModal(au)} style={{ marginLeft: "auto", background: "none", border: "none", color: "#5C9CE6", textDecoration: "underline", cursor: "pointer" }}>
                      Read Full 🔍
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* SECTION 3: SITE CONTENT SETTINGS */}
   <section 
  style={{ 
    padding: "20px", 
    border: "1px solid #f8bbd0", 
    borderRadius: "12px", 
    background: "linear-gradient(135deg, #fff5f8, #f8f6ff)" 
  }}
>
        <h2 style={{ color: "#d81b60", marginTop: 0 }}>Website Content Settings 📝</h2>
        {statusMessage && (
          <div style={{ padding: "10px", marginBottom: "16px", borderRadius: "8px", fontWeight: "bold", backgroundColor: statusMessage.type === "success" ? "#E8F5E9" : "#FFEBEE", color: statusMessage.type === "success" ? "#2E7D32" : "#C62828" }}>
            {statusMessage.text}
          </div>
        )}

        {loadingSettings ? (
          <p>Loading settings...</p>
        ) : (
          <form onSubmit={handleSaveSettings}>
            {/* Hero Section */}
            <h3 style={{ color: "#d81b60", marginBottom: "10px" }}>Hero Banner</h3>
            <div style={{ marginBottom: "16px" }}>
              <label style={{ fontWeight: "bold", display: "block", marginBottom: "6px" }}>Hero Title</label>
              <input
                type="text"
                value={siteSettings.hero_title || ""}
                onChange={(e) => setSiteSettings({ ...siteSettings, hero_title: e.target.value })}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #f48fb1", boxSizing: "border-box" }}
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={{ fontWeight: "bold", display: "block", marginBottom: "6px" }}>Hero Description</label>
              <textarea
                rows={3}
                value={siteSettings.hero_description || ""}
                onChange={(e) => setSiteSettings({ ...siteSettings, hero_description: e.target.value })}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #f48fb1", boxSizing: "border-box" }}
              />
            </div>

            <hr style={{ border: "none", borderTop: "1px dashed #f8bbd0", margin: "20px 0" }} />

            {/* Whole Group Section */}
            <h3 style={{ color: "#d81b60", marginBottom: "10px" }}>Whole Group Section</h3>
            <div style={{ marginBottom: "16px" }}>
              <label style={{ fontWeight: "bold", display: "block", marginBottom: "6px" }}>Title</label>
              <input
                type="text"
                value={siteSettings.whole_group_title || ""}
                onChange={(e) => setSiteSettings({ ...siteSettings, whole_group_title: e.target.value })}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #f48fb1", boxSizing: "border-box" }}
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={{ fontWeight: "bold", display: "block", marginBottom: "6px" }}>Description</label>
              <textarea
                rows={3}
                value={siteSettings.whole_group_desc || ""}
                onChange={(e) => setSiteSettings({ ...siteSettings, whole_group_desc: e.target.value })}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #f48fb1", boxSizing: "border-box" }}
              />
            </div>

            <hr style={{ border: "none", borderTop: "1px dashed #f8bbd0", margin: "20px 0" }} />

            {/* About Section */}
            <h3 style={{ color: "#d81b60", marginBottom: "10px" }}>About Section</h3>
            <div style={{ marginBottom: "16px" }}>
              <label style={{ fontWeight: "bold", display: "block", marginBottom: "6px" }}>About Title</label>
              <input
                type="text"
                value={siteSettings.about_title || ""}
                onChange={(e) => setSiteSettings({ ...siteSettings, about_title: e.target.value })}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #f48fb1", boxSizing: "border-box" }}
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={{ fontWeight: "bold", display: "block", marginBottom: "6px" }}>Subtitle</label>
              <input
                type="text"
                value={siteSettings.about_subtitle || ""}
                onChange={(e) => setSiteSettings({ ...siteSettings, about_subtitle: e.target.value })}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #f48fb1", boxSizing: "border-box" }}
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={{ fontWeight: "bold", display: "block", marginBottom: "6px" }}>Letter / Note</label>
              <textarea
                rows={4}
                value={siteSettings.about_letter || ""}
                onChange={(e) => setSiteSettings({ ...siteSettings, about_letter: e.target.value })}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #f48fb1", boxSizing: "border-box" }}
              />
            </div>

            <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontWeight: "bold", display: "block", marginBottom: "6px" }}>Signoff Text</label>
                <input
                  type="text"
                  placeholder="e.g. Warmly,"
                  value={siteSettings.about_signoff_text || ""}
                  onChange={(e) => setSiteSettings({ ...siteSettings, about_signoff_text: e.target.value })}
                  style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #f48fb1", boxSizing: "border-box" }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontWeight: "bold", display: "block", marginBottom: "6px" }}>Author Name</label>
                <input
                  type="text"
                  placeholder="e.g. Haneul"
                  value={siteSettings.about_signoff_author || ""}
                  onChange={(e) => setSiteSettings({ ...siteSettings, about_signoff_author: e.target.value })}
                  style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #f48fb1", boxSizing: "border-box" }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={savingSettings || !isSettingsDirty}
              style={{
                padding: "10px 20px",
                backgroundColor: isSettingsDirty ? "#d81b60" : "#ccc",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: isSettingsDirty ? "pointer" : "not-allowed",
              }}
            >
              {savingSettings ? "Saving..." : "Save Website Content"}
            </button>
          </form>
        )}
      </section>

      {/* Modal View */}
      {selectedAuModal && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.4)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 }} onClick={() => setSelectedAuModal(null)}>
          <div style={{ backgroundColor: "#fff", padding: "24px", borderRadius: "12px", maxWidth: "600px", width: "90%", maxHeight: "80vh", overflowY: "auto" }} onClick={(e) => e.stopPropagation()}>
            <h2 style={{ color: "#d81b60", marginTop: 0 }}>{selectedAuModal.title}</h2>
            <p style={{ fontStyle: "italic", color: "#666" }}>By: {selectedAuModal.author || "Anonymous"}</p>
            <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.6" }}>{selectedAuModal.content || selectedAuModal.summary}</p>
            <button onClick={() => setSelectedAuModal(null)} style={{ padding: "8px 16px", backgroundColor: "#d81b60", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", marginTop: "16px" }}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
