import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-4 border-b p-4">
        <Link to="/" className="text-blue-600 hover:underline">
          Home
        </Link>

        <Link to="/about" className="text-blue-600 hover:underline">
          About
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
