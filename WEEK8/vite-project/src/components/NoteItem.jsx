import React from "react";

function NoteItem({ note, deleteNote }) {
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px"
      }}
    >
      <span>{note.text}</span>

      <button
        onClick={() => deleteNote(note.id)}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </div>
  );
}

export default NoteItem;