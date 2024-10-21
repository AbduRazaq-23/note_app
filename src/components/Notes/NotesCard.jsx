import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const NotesCard = ({ note, i }) => {
  const Note = localStorage.getItem("notes");
  const Item = Note ? JSON.parse(Note) : [];

  const deleteMe = () => {
    if (Item.length > 0) {
      Item.splice(i, 1);
    }
    localStorage.setItem("notes", JSON.stringify(Item));

    window.location.reload();
  };

  return (
    <div className="border border-slate-200 rounded-md p-2">
      <button className="w-full flex justify-end">
        <MdDeleteOutline onClick={deleteMe} className="hover:scale-105" />
      </button>
      <Link to={`/note/${i}`}>
        <h1>{note.title}</h1>

        <p>{note.description}</p>
      </Link>
    </div>
  );
};

export default NotesCard;
