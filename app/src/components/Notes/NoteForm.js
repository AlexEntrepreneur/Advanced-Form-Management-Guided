import React, { useState } from "react";

const NoteForm = props => {
  console.log("props", props);
  const [note, setNote] = useState({ title: "", body: "" });

  const handleChanges = e => {
    console.log(note);
    // console.log("the name", e.target.name)
    // console.log("the event target", e.target)
    //we are dynamically setting our keys.
    // setNote({ ...note, title: e.target.value });
    // setNote({ ...note, note: e.target.value });
    //  const nameObj={...note}
    //  nameObj[e.target.name]= e.target.value
    // setNote(nameObj)
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewNote(note);
    setNote({ title: "", body: "" });
  };

  return (
    <form onSubmit={submitForm} className="notes-form">
      <label htmlFor="title" className="notes-label">
        Title
      </label>
      <input
        id="title"
        className="notes-input"
        type="text"
        name="title"
        onChange={handleChanges}
        value={note.title}
      />
      <label htmlFor="note" className="notes-label">
        Note
      </label>
      <textarea
        id="note"
        className="notes-textarea"
        name="body"
        onChange={handleChanges}
        value={note.body}
      />
      <button type="submit" className="notes-button">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
