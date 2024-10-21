import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostNotes = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  const changeValue = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const postNote = (e) => {
    e.preventDefault();

    const updateNotes = [...notes, formData];
    setNotes(updateNotes);

    localStorage.setItem("notes", JSON.stringify(updateNotes));
    setFormData("");
    navigate("/");
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen  px-2">
      <form
        onSubmit={postNote}
        className="w-full md:w-[30%] flex flex-col p-4 space-y-2 border border-slate-200 rounded-md "
      >
        <h1 className="text-center font-bold">PostNotes</h1>
        <input
          className="p-1 rounded-md focus:outline-none bg-slate-900 border border-slate-200"
          type="text"
          placeholder="title"
          name="title"
          value={formData.title || ""}
          onChange={changeValue}
        />
        <textarea
          className="p-1 rounded-md focus:outline-none bg-slate-900 border border-slate-200"
          name="description"
          cols="30"
          rows="10"
          value={formData.description || ""}
          onChange={changeValue}
        />
        <button type="submit" className="border border-slate-200 rounded-md">
          add
        </button>
      </form>
    </div>
  );
};

export default PostNotes;
