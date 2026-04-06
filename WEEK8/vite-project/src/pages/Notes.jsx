import React, { useState, useRef, useEffect } from "react";
import NoteItem from "../components/NoteItem";

function Notes() {
  const [notes, setNotes] = useState([]);
  const inputRef = useRef();

  // Load saved notes
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes whenever updated
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Auto focus input (REF)
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addNote = () => {
    const text = inputRef.current.value.trim();
    if (!text) return;

    const newNote = {
      id: Date.now(),
      text
    };

    setNotes([...notes, newNote]);

    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div>
      <h2>📝 Notes</h2>

      <input
        ref={inputRef}
        placeholder="Write something..."
        style={{ padding: "8px", width: "200px" }}
      />
      <button onClick={addNote} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <div style={{ marginTop: "20px" }}>
        {notes.length === 0 ? (
          <p>No notes yet</p>
        ) : (
          notes.map((note) => (
            <NoteItem
              key={note.id}   // 🔑 KEY
              note={note}
              deleteNote={deleteNote}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Notes;