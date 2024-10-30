// import React ,{useRef} from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from 'react-router-dom';
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";


function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
    .then(() => {
      sessionStorage.removeItem("currentuser");
      navigate("/"); // Redirect to home page
      // console.log("Signed out successfully");
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
  };  
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="..." />
        </div>
        <div id="title" className="d-flex justify-content-center">
          <h2>BookMyCode</h2>
        </div>
        <nav role="navigation" className="navigation">
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
            {/* {console.log(sessionStorage)} */}
            {sessionStorage.getItem("currentuser") ? (
              <li>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                >Profile &darr;</a>
                <ul  className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink" >
                  <li>
                    <a className="dropdown-item" href="javascipt:void()" onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/user/profile">Profile</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">My Book</a>
                  </li>
                  <li>
                    <a className="dropdown-item"  href="#">Iconography</a>
                  </li>
                </ul>
              </li>
            ) : (
              <li>
                <a href="/login">Login</a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;