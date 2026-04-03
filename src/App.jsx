import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";


function App() {
  return (
    <>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="book" element={<Book />} />
  <Route path="login" element={<Login />} />
  <Route path="register" element={<Register />} />
  <Route path="team" element={<Team />} />
  <Route path="contact" element={<Contact />} />
  </Routes>
    </>
  )
}
export default App;