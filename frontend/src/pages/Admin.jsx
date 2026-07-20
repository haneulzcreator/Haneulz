import React, { useState } from "react";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div style={{ padding: "30px" }}>
      <h1>HANEULZ Admin Panel</h1>

      <h2>Add Variety Post</h2>

      <input
        placeholder="Episode title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <button>
        Publish
      </button>

    </div>
  );
}
