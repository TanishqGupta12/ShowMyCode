import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const auth = getAuth();
  const [email, setemail] = useState(" ");
  const [password, setpassword] = useState(" ");

  const handleSign = () => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);
        sessionStorage.setItem("currentuser", user.uid);
        alert(" Succeessfully login ")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  };

  return (
    <>
      <div className="login">
        <div className="image_main">
          <img src="Banner_v2.jpg" alt=".." />
        </div>

        <div className="profile">
          <div className="profile_main">
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
                type="email"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                value={password}
              />
            </div>
            <div>
              <input type="submit" value="Submit" onClick={handleSign} />
            </div>
            <Link className="link" to="/Sign">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
