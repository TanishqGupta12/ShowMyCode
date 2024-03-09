import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setemail] = useState(" ");
  const [password, setpassword] = useState(" ");

  const handleButtonClick = () => {
    console.log("dkjsd");
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
              <input type="submit" onClick={handleButtonClick} value="Submit" />
            </div>
          </div>
          <div className="link">
              <Link to="/Sign">Sign Up</Link>
            </div>
        </div>
      </div>
    </>
  );
}
