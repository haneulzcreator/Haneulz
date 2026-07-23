import React, { useState, useEffect } from "react";
import { getSettings, updateSettings, formatApiError } from "../api";

export default function Admin() {
  // Existing Variety Post state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Site Settings state
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

  // Fetch initial settings from MongoDB on mount
  useEffect(() => {
    async function loadSettings() {
      try {
        const data = await getSettings();
        setSiteSettings(data);
      } catch (err) {
        console.error("Failed to load settings:", err);
      } finally {
        setLoadingSettings(false);
      }
    }
    loadSettings();
  }, []);

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
      const errorMsg = formatApiError(err.response?.data?.detail);
      setStatusMessage({ type: "error", text: errorMsg });
    } finally {
      setSavingSettings(false);
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>HANEULZ Admin Panel</h1>

      {/* ========================================== */}
      {/* SECTION 1: ADD VARIETY POST               */}
      {/* ========================================== */}
      <section style={{ marginBottom: "40px", padding: "20px", border: "1px solid #eee", borderRadius: "12px" }}>
        <h2>Add Variety Post</h2>

        <input
          placeholder="Episode title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <br /><br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <br /><br />

        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Publish
        </button>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: EDIT SITE CONTENT (SETTINGS)    */}
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
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "12px" }}
              />

              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>Hero Subtitle:</label>
              <input
                type="text"
                name="hero_subtitle"
                value={siteSettings.hero_subtitle || ""}
                onChange={handleSettingsChange}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
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
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "12px" }}
              />

              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>Section Description:</label>
              <input
                type="text"
                name="whole_group_desc"
                value={siteSettings.whole_group_desc || ""}
                onChange={handleSettingsChange}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
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
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "12px" }}
              />

              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>Subtitle:</label>
              <input
                type="text"
                name="about_subtitle"
                value={siteSettings.about_subtitle || ""}
                onChange={handleSettingsChange}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "12px" }}
              />

              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>Journal Letter:</label>
              <textarea
                name="about_letter"
                rows={6}
                value={siteSettings.about_letter || ""}
                onChange={handleSettingsChange}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "12px", fontFamily: "inherit" }}
              />

              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>Sign-off Text:</label>
              <input
                type="text"
                name="about_signoff_text"
                value={siteSettings.about_signoff_text || ""}
                onChange={handleSettingsChange}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "12px" }}
              />

              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>Sign-off Author:</label>
              <input
                type="text"
                name="about_signoff_author"
                value={siteSettings.about_signoff_author || ""}
                onChange={handleSettingsChange}
                style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
              />
            </div>

            <button
              type="submit"
              disabled={savingSettings}
              style={{
                padding: "12px 24px",
                backgroundColor: "#5C9CE6",
                color: "#ffffff",
                fontWeight: "bold",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
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
