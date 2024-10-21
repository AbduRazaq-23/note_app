import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Notes, AddButton, PostNotes, Note } from "./components/index";

function App() {
  return (
    <div className="bg-gray-900 w-full min-h-screen text-gray-300">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Notes />
                <AddButton />
              </>
            }
          />
          <Route path="/postnotes" element={<PostNotes />} />
          <Route path="/note/:id" element={<Note />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
