
import About from "./Components/About";
import Home from "./Components/Home";
import Blog from "./Components/blog";


 
import { Routes, Route } from "react-router-dom";  

import "./App.css"
function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path='/'  element={<Home />} />

          <Route exact path='/About'  element={<About />} />

          <Route exact path='/login'  element={<Blog />} />

      </Routes>
    </div>
  );
}

export default App;
