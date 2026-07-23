import React, { useState, useEffect, useRef } from "react";
import { getSettings, updateSettings, formatApiError, api } from "../lib/api";

export default function Admin() {
  // ... (Section 1 States stay the same)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [publishingPost, setPublishingPost] = useState(false);
  const [postStatus, setPostStatus] = useState(null);
  const fileInputRef = useRef(null);

  // SECTION 2 STATES: PENDING AU SUBMISSIONS & MODAL + SEARCH/FILTER
  const [pendingAus, setPendingAus] = useState([]);
  const [loadingPending, setLoadingPending] = useState(true);
  const [auActionStatus, setAuActionStatus] = useState(null);
  const [selectedAuModal, setSelectedAuModal] = useState(null);
  
  // New Search & Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  // SECTION 3 STATES: SITE CONTENT SETTINGS
  const [initialSettings, setInitialSettings] = useState({});
  const [siteSettings, setSiteSettings] = useState({
    hero_title: "", hero_subtitle: "", whole_group_title: "",
    whole_group_desc: "", about_title: "", about_subtitle: "",
    about_letter: "", about_signoff_text: "", about_signoff_author: "",
  });
  const [loadingSettings, setLoadingSettings] = useState(true);
  const [savingSettings, setSavingSettings] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

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
          setSiteSettings(settingsData);
          setInitialSettings(settingsData);
        }
      } catch (err) { console.error(err); } 
      finally { setLoadingSettings(false); }

      try {
        const response = await api.get("/admin/pending-aus");
        setPendingAus(response.data || []);
      } catch (err) { console.error(err); } 
      finally { setLoadingPending(false); }
    }
    fetchData();
  }, []);

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

  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>HANEULZ Admin Panel</h1>

      {/* SECTION 2: PENDING AUs WITH SEARCH & FILTER */}
      <section style={{ marginBottom: "40px", padding: "20px", border: "1px solid #f8bbd0", borderRadius: "12px", background: "#fff5f8" }}>
        <h2 style={{ color: "#d81b60", marginTop: 0 }}>
          Pending AU Submissions ({filteredAus.length}/{pendingAus.length}) ☁️
        </h2>

        {/* Search & Genre Controls */}
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

      {/* Modal View */}
      {selectedAuModal && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.4)", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => setSelectedAuModal(null)}>
          <div style={{ backgroundColor: "#fff", padding: "24px", borderRadius: "12px", maxWidth: "600px", width: "100%" }} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedAuModal.title}</h2>
            <p style={{ whiteSpace: "pre-wrap" }}>{selectedAuModal.content || selectedAuModal.summary}</p>
            <button onClick={() => setSelectedAuModal(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
