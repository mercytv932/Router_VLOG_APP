import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <h1>Blog App</h1>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
