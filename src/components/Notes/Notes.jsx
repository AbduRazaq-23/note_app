import React from "react";
import NotesCard from "./NotesCard";
import { Link } from "react-router-dom";

const Notes = () => {
  return (
    <div className="w-full p-5 mt-20">
      <div className="grid md:grid-cols-4 gap-4">
        <Link to={"/note"}>
          <NotesCard />
        </Link>
        <NotesCard />
        <NotesCard />
        <NotesCard />
      </div>
    </div>
  );
};

export default Notes;
