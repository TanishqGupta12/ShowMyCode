import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import banner from "../../image/seven-shooter-hPKTYwJ4FUo-unsplash.jpg";
import "./user.css";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword , updateProfile } from "firebase/auth"; // Import createUserWithEmailAndPassword correctly
import { useNavigate } from "react-router-dom";

import { auth } from "../../Firebase";

export default function Login() {
  const [Full_name, setFull_name] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [c_password, setc_password] = useState("");
  const navigate = useNavigate();

  // const auth = auth();
  const myInlineStyle = {
    textAlign: "center",
    padding: "20px",
    paddingBottom: "2px",
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    if (password !== c_password) {
      console.error("Passwords do not match");
      alert("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sessionStorage.setItem("currentuser",  user.uid);
        updateProfile(user, {
          displayName: Full_name,
        }).then(() => {
            console.log("Display name updated successfully");
          })
          .catch((error) => {
            console.error("Error updating display name:", error);
          });
        navigate("/");
        alert("User signed up successfully")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Signup error:", errorCode, errorMessage);
      });
  };

  return (
    <>
      <div className="sign_up">
        <div>
          <div className="image">
            <img src={banner} alt=".." />
          </div>
        </div>

        <div>
          <div className="profile">
            <div className="profile_main">
              <div>
                <h2 style={myInlineStyle}> Login</h2>
              </div>

              <div id="sign">
                <Typography variant="h6" display="block" className="h6">
                  Full Name
                </Typography>
                <input
                  type="text"
                  onChange={(e) => {
                    setFull_name(e.target.value);
                  }}
                  value={Full_name}
                />
              </div>

              <div>
                <Typography variant="h6" display="block" className="h6">
                  Email
                </Typography>
                <input
                  type="email"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  value={email}
                />
              </div>

              <div>
                <Typography variant="h6" display="block" className="h6">
                  Password
                </Typography>
                <input
                  type="password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  value={password}
                />
              </div>

              <div id="sign">
                <Typography variant="h6" display="block" className="h6">
                  Confirm Password
                </Typography>
                <input
                  type="password"
                  onChange={(e) => {
                    setc_password(e.target.value);
                  }}
                  value={c_password}
                />
              </div>

              <div>
                <input
                  type="submit"
                  value="Submit"
                  onClick={handleButtonClick}
                />
              </div>
              <div className="link">
                <Link to="/login">login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
