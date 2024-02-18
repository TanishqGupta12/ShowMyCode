import React from "react";
import Typography from "@mui/material/Typography";
import "./user.css";

import banner from "../../image/seven-shooter-hPKTYwJ4FUo-unsplash.jpg";
// import { Input } from "@mui/icons-material";
// import banner from "../../image/hand-drawn-web-developers_23-2148819604.jpg";

export default function Login() {
  const myInlineStyle = {
    textAlign: "center",
    padding: "20px",
    paddingBottom: "2px",
  };
  return (
    <>
      <div className="login">
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
              <div>
                <Typography variant="h6" display="block" className="h6">
                  Full Name
                </Typography>
                <input type="email" />
              </div>
              <div>
                <Typography variant="h6" display="block" className="h6">
                  Email
                </Typography>
                <input type="email" />
              </div>
              <div>
                <Typography variant="h6" display="block" className="h6">
                  Password
                </Typography>
                <input type="email" />
              </div>
              <div>
                <Typography variant="h6" display="block" className="h6">
                  Confirm Password
                </Typography>
                <input type="email" />
              </div>
              <div>
                <Typography variant="h6" display="block" className="h6">
                  Phone Number
                </Typography>
                <input type="email" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
