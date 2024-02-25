import React from "react";
import "bootstrap/dist/css/bootstrap.css";
function Navbar() {
  return (
    <>
      <section>
        <nav>
          <div class="logo">
            <img src={process.env.PUBLIC_URL + "./logo.png"} alt="..." />
          </div>
          <div id="title" class="d-flex justify-content-center">
            <h2>BookMyCode</h2>
          </div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Blog">Blog</a>
            </li>
            <li>
              <a href="/login">login</a>
            </li>
            {/* <li>
              <a href="/login">login</a>
            </li> */}
            {/* <li>
              <a href="#Blog">Blog</a>
            </li> */}
          </ul>
          <div class="social_icon">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
