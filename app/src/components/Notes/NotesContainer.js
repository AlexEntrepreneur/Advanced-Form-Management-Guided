import React, { useState } from 'react';

import NoteForm from './NoteForm';
import NotesList from './NotesList';

export default function Notes() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Happy little quote",
      body:
        "Talent is a pursued interest. Anything that you're willing to practice, you can do.― Bob Ross "
    }
  ]);

  const addNewNote = note => {
    const newNote = {
      id: Date.now(),
      title: note.title,
      body: note.body
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="Notes">
      <h1>My Notes</h1>
      {/* we are going to pass a function down as a prop */}
      <NoteForm addNewNote={addNewNote} />
      <NotesList notes={notes} />
    </div>
  );
}
