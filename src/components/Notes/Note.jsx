import { useParams } from "react-router-dom";

const Note = () => {
  const { id } = useParams();
  const localStorageData = localStorage.getItem("notes");
  const parseData = localStorageData ? JSON.parse(localStorageData) : [];

  const singleNote = parseData.find((i, index) => index == id);

  return (
    <div className="p-5">
      <h1 className="font-bold">{singleNote.title}</h1>
      <hr />
      <p>{singleNote.description}</p>
    </div>
  );
};

export default Note;
