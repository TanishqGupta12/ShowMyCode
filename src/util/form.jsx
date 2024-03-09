import React, { useState } from "react";
import Typography from "@mui/material/Typography";

export default function Form() {
  const [Full_name, setFull_name] = useState("");
  const [email, setemail] = useState(" ");
  const [password, setpassword] = useState(" ");
  const [c_password, setc_password] = useState(" ");
  const [P_number, setP_number] = useState();

  const handleButtonClick = (e) => {
    setemail(e.target.value);
    setFull_name(e.target.value);
    setpassword(e.target.value);
    setc_password(e.target.value);
    setP_number(e.target.value);
  };
  return (
    <>
      <div id="sign">
        <Typography variant="h6" display="block" className="h6">
          Full Name
        </Typography>
        <input type="text" onChange={handleButtonClick} value={Full_name} />
      </div>

      <div>
        <Typography variant="h6" display="block" className="h6">
          Email
        </Typography>
        <input type="email" onChange={handleButtonClick} value={email} />
      </div>

      <div>
        <Typography variant="h6" display="block" className="h6">
          Password
        </Typography>
        <input type="password" onChange={handleButtonClick} value={password} />
      </div>

      <div id="sign">
        <Typography variant="h6" display="block" className="h6">
          Confirm Password
        </Typography>
        <input type="password" onChange={handleButtonClick} value={c_password} />
      </div>

      <div id="sign">
        <Typography variant="h6" display="block" className="h6">
          Phone Number
        </Typography>
        <input type="number" onChange={handleButtonClick} value={P_number} />
      </div>

      <div>
        <input type="submit" value="Submit" />
      </div>
    </>
  );
}
