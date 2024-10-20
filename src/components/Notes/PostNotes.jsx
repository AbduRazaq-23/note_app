import React from "react";

const PostNotes = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen  px-2">
      <form className="w-full md:w-[30%] flex flex-col p-4 space-y-2 border border-slate-200 rounded-md ">
        <h1 className="text-center font-bold">PostNotes</h1>
        <input
          className="p-1 rounded-md focus:outline-none bg-slate-900 border border-slate-200"
          type="text"
          placeholder="title"
        />
        <textarea
          className="p-1 rounded-md focus:outline-none bg-slate-900 border border-slate-200"
          name="textarea"
          id="textarea"
          cols="30"
          rows="10"
        />
        <button className="border border-slate-200 rounded-md">add</button>
      </form>
    </div>
  );
};

export default PostNotes;
