import About from "./Components/About";
import Home from "./Components/Home";
import Blog from "./Components/blog";

import Login from "../src/Components/User/Login";
import Sign from "../src/Components/User/Sign_up";
import Admin from "../src/Components/Admin/Admin";
import List from "../src/Components/Admin/list";

import { Routes, Route } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/About" element={<About />} />

        <Route exact path="/Blog" element={<Blog />} />

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/Sign" element={<Sign />} />

        <Route exact path="/Admin" element={<Admin />} />

        <Route exact path="/List" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
