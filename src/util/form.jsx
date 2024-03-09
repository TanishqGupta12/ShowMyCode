import React, { useState } from "react";
import Typography from "@mui/material/Typography";

import { ref as refs, set, push } from "firebase/database";

import  { Database} from '../Firebase';
import 'firebase/database';
export default function Form() {
  const [Full_name, setFull_name] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [c_password, setc_password] = useState("");
  const [P_number, setP_number] = useState();

  const handleButtonClick = () => {
    console.log("dkjsd");
    // setFull_name(e.target.value);
    // setpassword(e.target.value);
    // setc_password(e.target.value);
    // setP_number(e.target.value);
    const dbRef = push(refs(Database , "sign_up"));

    // Push data to the database
    set(dbRef ,{
        Name: Full_name,
        email: email,
        password: password,
        c_password: c_password,
        P_number: P_number
    });
  };
  return (
    <>
      <div id="sign">
        <Typography variant="h6" display="block" className="h6">
          Full Name
        </Typography>
        <input type="text" name='full_name' onChange={(e)=>{setFull_name(e.target.value);}} value={Full_name} />
      </div>

      <div>
        <Typography variant="h6" display="block" className="h6">
          Email
        </Typography>
        <input type="email" name='email' onChange={(e)=>{setemail(e.target.value)}} value={email} />
      </div>

      <div>
        <Typography variant="h6" display="block" className="h6">
          Password
        </Typography>
        <input type="password" name='password' onChange={(e)=>{setpassword(e.target.value)}} value={password} />
      </div>

      <div id="sign">
        <Typography variant="h6" display="block" className="h6">
          Confirm Password
        </Typography>
        <input type="cpassword" name="cpassword" onChange={(e)=>{setc_password(e.target.value)}} value={c_password} />
      </div>

      <div id="sign">
        <Typography variant="h6" display="block" className="h6">
          Phone Number
        </Typography>
        <input type="number" name="number" onChange={(e)=>{setP_number(e.target.value)}} value={P_number} />
      </div>

      <div>
        <input type="submit" onClick={handleButtonClick} value="Submit" />
      </div>
    </>
  );
}
