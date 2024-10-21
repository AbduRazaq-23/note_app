import React, { useEffect, useState } from "react";
import NotesCard from "./NotesCard";
import { Link } from "react-router-dom";

const Notes = () => {
  const [notes, setNotes] = useState();
  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    const getNotes = storedNotes ? JSON.parse(storedNotes) : [];

    setNotes(getNotes);
  }, []);

  return (
    <div className="w-full p-5 mt-20">
      <div className="grid md:grid-cols-4 gap-4">
        {notes?.map((note, i) => (
          <NotesCard key={i} note={note} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
