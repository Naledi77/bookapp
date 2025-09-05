import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>📖 Book App</h1>
      <p>Fun, simple, and minimal</p>
      <p>Welcome! Ready to dive into stories? Go to the Books page ➡️</p>
      <Link to="/books">Go to Books</Link>
    </div>
  );
}

function Books() {
  return (
    <div>
      <h1>🚧 Books Page</h1>
      <p>Shh... the stories are still brewing ☕✨</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </Router>
  );
}
