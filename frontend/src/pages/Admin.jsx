import React, { useState, useEffect } from "react";
import { getSettings, updateSettings, formatApiError, api } from "../lib/api";

export default function Admin() {
  // 1. Variety Post State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [publishingPost, setPublishingPost] = useState(false);
  const [postStatus, setPostStatus] = useState(null);

  // 2. Pending AU Submissions State
  const [pendingAus, setPendingAus] = useState([]);
  const [loadingPending, setLoadingPending] = useState(true);

  // 3. Site Settings State
  const [siteSettings, setSiteSettings] = useState({
    hero_title: "",
    hero_subtitle: "",
    whole_group_title: "",
    whole_group_desc: "",
    about_title: "",
    about_subtitle: "",
    about_letter: "",
    about_signoff_text: "",
    about_signoff_author: "",
  });

  const [loadingSettings, setLoadingSettings] = useState(true);
  const [savingSettings, setSavingSettings] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  // Load pending AUs and initial settings on mount
  useEffect(() => {
    async function fetchData() {
      // Fetch site settings
      try {
        const settingsData = await getSettings();
        if (settingsData) setSiteSettings(settingsData);
      } catch (err) {
        console.error("Failed to load settings:", err);
      } finally {
        setLoadingSettings(false);
      }

      // Fetch pending AU submissions
      try {
        const response = await api.get("/admin/pending-aus");
        setPendingAus(response.data || []);
      } catch (err) {
        console.error("Failed to load pending AUs:", err);
      } finally {
        setLoadingPending(false);
      }
    }

    fetchData();
  }, []);

  // --- Handlers for Section 1: Variety Post ---
  const handlePublishPost = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setPostStatus({ type: "error", text: "Please provide an episode title." });
      return;
    }

    setPublishingPost(true);
    setPostStatus(null);

    try {
      await api.post("/admin/variety-posts", { title, description });
      setPostStatus({ type: "success", text: "Variety post published successfully! ☁️💗" });
      setTitle("");
      setDescription("");
    } catch (err) {
      const errorMsg = formatApiError?.(err.response?.data?.detail) || "Failed to publish post.";
      setPostStatus({ type: "error", text: errorMsg });
    } finally {
      setPublishingPost(false);
    }
  };

  // --- Handlers for Section 2: AU Management ---
  const handleApproveAU = async (id) => {
    try {
      await api.post(`/admin/approve-au/${id}`);
      setPendingAus((prev) => prev.filter((au) => (au.id || au._id) !== id));
      alert("AU Approved! ☁️💗");
    } catch (err) {
      console.error("Failed to approve AU:", err);
      alert("Failed to approve AU.");
    }
  };

  const handleDeleteAU = async (id) => {
    if (!window.confirm("Are you sure you want to delete this AU submission?")) return;
    try {
      await api.delete(`/admin/au/${id}`);
      setPendingAus((prev) => prev.filter((au) => (au.id || au._id) !== id));
    } catch (err) {
      console.error("Failed to delete AU:", err);
      alert("Failed to delete AU.");
    }
  };

  // --- Handlers for Section 3: Site Settings ---
  const handleSettingsChange = (e) => {
    const { name, value } = e.target;
    setSiteSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setSavingSettings(true);
    setStatusMessage(null);

    try {
      await updateSettings(siteSettings);
      setStatusMessage({ type: "success", text: "Settings saved successfully! ☁️💗" });
    } catch (err) {
      const errorMsg = formatApiError?.(err.response?.data?.detail) || "Failed to save settings.";
      setStatusMessage({ type: "error", text: errorMsg });
    } finally {
      setSavingSettings(false);
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>HANEULZ Admin Panel</h1>

      {/* ========================================== */}
      {/* SECTION 1: ADD VARIETY POST               */}
      {/* ========================================== */}
      <section style={{ marginBottom: "40px", padding: "20px", border: "1px solid #eee", borderRadius: "12px" }}>
        <h2>Add Variety Post</h2>

        {postStatus && (
          <div
            style={{
              padding: "12px",
              marginBottom: "16px",
              borderRadius: "8px",
              backgroundColor: postStatus.type === "success" ? "#E8F5E9" : "#FFEBEE",
              color: postStatus.type === "success" ? "#2E7D32" : "#C62828",
              fontWeight: "bold",
            }}
          >
            {postStatus.text}
          </div>
        )}

        <form onSubmit={handlePublishPost}>
          <input
            placeholder="Episode title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box" }}
          />

          <br /><br />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box" }}
          />

          <br /><br />

          <button
            type="submit"
            disabled={publishingPost}
            style={{
              padding: "10px 20px",
              backgroundColor: publishingPost ? "#999" : "#333",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: publishingPost ? "not-allowed" : "pointer"
            }}
          >
            {publishingPost ? "Publishing..." : "Publish"}
          </button>
        </form>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: PENDING AU SUBMISSIONS         */}
      {/* ========================================== */}
      <section style={{ marginBottom: "40px", padding: "20px", border: "1px solid #f8bbd0", borderRadius: "12px", background: "#fff5f8" }}>
        <h2 style={{ color: "#d81b60" }}>
          Pending AU Submissions ({pendingAus.length}) ☁️
        </h2>

        {loadingPending ? (
          <p>Loading pending submissions...</p>
        ) : pendingAus.length === 0 ? (
          <p style={{ fontStyle: "italic", color: "#666" }}>No pending AU submissions to review!</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {pendingAus.map((au) => {
              const auId = au.id || au._id;
              return (
                <div
                  key={auId}
                  style={{
                    padding: "16px",
                    background: "#ffffff",
                    border: "1px solid #f48fb1",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <h3 style={{ margin: 0 }}>{au.title}</h3>
                    <span style={{ fontSize: "0.8rem", color: "#d81b60", fontWeight: "bold" }}>
                      {au.genre || "AU"}
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>
                    By: <strong>{au.author || "Anonymous"}</strong>
                  </p>
                  <p style={{ margin: "8px 0", fontSize: "0.95rem" }}>{au.summary}</p>

                  <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
                    <button
                      type="button"
                      onClick={() => handleApproveAU(auId)}
                      style={{
                        padding: "8px 16px",
                        backgroundColor: "#d81b60",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: "bold"
                      }}
                    >
                      Approve AU
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteAU(auId)}
                      style={{
                        padding: "8px 16px",
                        backgroundColor: "#fff",
                        color: "#c62828",
                        border: "1px solid #c62828",
                        borderRadius: "6px",
                        cursor: "pointer"
                      }}
                    >
                      Reject / Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ========================================== */}
      {/* SECTION 3: EDIT SITE CONTENT (SETTINGS)   */}
      {/* ========================================== */}
      <section style={{ padding: "20px", border: "1px solid #e3f2fd", borderRadius: "12px", background: "#fbfcfe" }}>
        <h2 style={{ color: "#5C9CE6" }}>Edit Site Content ☁️</h2>

        {loadingSettings ? (
          <p>Loading site settings... ☁️</p>
        ) : (
          <form onSubmit={handleSaveSettings} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {statusMessage && (
              <div
                style={{
                  padding: "12px",
                  borderRadius: "8px",
                  backgroundColor: statusMessage.type === "success" ? "#E8F5E9" : "#FFEBEE",
                  color: statusMessage.type === "success" ? "#2E7D32" : "#C62828",
                  fontWeight: "bold",
                }}
              >
                {statusMessage.text}
              </div>
            )}

            {/* HERO SECTION SETTINGS */}
            <div style={{ background: "#F0F7FF", padding: "16px", borderRadius: "12px" }}>
              <h3 style={{ marginTop: 0, color: "#42A5F5" }}>Hero Section</h3>

              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>Hero Title:</label>
              <input
                type="text"
                name="hero_title"
                value={siteSettings.hero_title || ""}
                onChange={handleSettingsChange}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "12px", boxSizing: "border-box" }}
              />

              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>Hero Subtitle:</label>
              <input
                type="text"
                name="hero_subtitle"
                value={siteSettings.hero_subtitle || ""}
                onChange={handleSettingsChange}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box" }}
              />
            </div>

            {/* WHOLE GROUP SECTION SETTINGS */}
            <div style={{ background: "#F5F5F5", padding: "16px", borderRadius: "12px" }}>
              <h3 style={{ marginTop: 0, color: "#616161" }}>Whole Group Section</h3>

              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>Section Title:</label>
              <input
                type="text"
                name="whole_group_title"
                value={siteSettings.whole_group_title || ""}
                onChange={handleSettingsChange}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "12px", boxSizing: "border-box" }}
              />

              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>Section Description:</label>
              <input
                type="text"
                name="whole_group_desc"
                value={siteSettings.whole_group_desc || ""}
                onChange={handleSettingsChange}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box" }}
              />
            </div>

            {/* ABOUT SECTION SETTINGS */}
            <div style={{ background: "#FFF5F8", padding: "16px", borderRadius: "12px" }}>
              <h3 style={{ marginTop: 0, color: "#F48FB1" }}>Our Little Corner (About Page)</h3>

              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>Title:</label>
              <input
                type="text"
                name="about_title"
                value={siteSettings.about_title || ""}
                onChange={handleSettingsChange}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "12px", boxSizing: "border-box" }}
              />

              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>Subtitle:</label>
              <input
                type="text"
                name="about_subtitle"
                value={siteSettings.about_subtitle || ""}
                onChange={handleSettingsChange}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "12px", boxSizing: "border-box" }}
              />

              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>Journal Letter:</label>
              <textarea
                name="about_letter"
                rows={6}
                value={siteSettings.about_letter || ""}
                onChange={handleSettingsChange}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "12px", fontFamily: "inherit", boxSizing: "border-box" }}
              />

              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>Sign-off Text:</label>
              <input
                type="text"
                name="about_signoff_text"
                value={siteSettings.about_signoff_text || ""}
                onChange={handleSettingsChange}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "12px", boxSizing: "border-box" }}
              />

              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>Sign-off Author:</label>
              <input
                type="text"
                name="about_signoff_author"
                value={siteSettings.about_signoff_author || ""}
                onChange={handleSettingsChange}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box" }}
              />
            </div>

            <button
              type="submit"
              disabled={savingSettings}
              style={{
                padding: "12px 24px",
                backgroundColor: savingSettings ? "#90CAF9" : "#5C9CE6",
                color: "#ffffff",
                fontWeight: "bold",
                border: "none",
                borderRadius: "8px",
                cursor: savingSettings ? "not-allowed" : "pointer",
                fontSize: "1rem",
              }}
            >
              {savingSettings ? "Saving Settings..." : "Save All Changes ☁️💗"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
