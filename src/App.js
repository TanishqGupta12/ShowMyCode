import About from "./Components/About";
import Home from "./Components/Home";
import Blog from "./Components/blog";

import Book_products from "./Components/Book_products";

import Login from "../src/Components/User/Login";
import Sign from "../src/Components/User/Sign_up";

import Profile_update from "../src/Components/User/profile_update";
import Admin from "../src/Components/Admin/Admin";
import List from "../src/Components/Admin/list";
import Admin_upload from "../src/Components/Admin/Admin_upload";

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

        <Route exact path="/book/list" element={<Book_products />} />

        <Route exact path="/Admin" element={<Admin />} />
        <Route exact path="/Admin/List" element={<List />} />
        <Route exact path="/Admin/file/upload" element={<Admin_upload />} />

        <Route exact path="/user/profile" element={<Profile_update />} />

      </Routes>
    </div>
  );
}

export default App;
