import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";

import { ref as refs, set, push, get } from "firebase/database";

import { Database } from "../Firebase";

export default function Form() {
  const [Full_name, setFull_name] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [c_password, setc_password] = useState("");

  const [getdata, setdata] = useState();

  const handleButtonClick = (e) => {
    e.preventDefault();

    const dbRef = push(refs(Database, "sign_up"));
    // Push data to the databas
    set(dbRef, {
      Name: Full_name,
      email: email,
      password: password,
      c_password: c_password,
      stutas: true,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await get(refs(Database, "sign_up"));

      snapshot.val() !== null
        ? setdata(Object.values(snapshot.val()))
        : setdata("No data available in the database");

      // console.log(snapshot.exists());
    };

    fetchData();
    console.log(getdata);
  }, [handleButtonClick]);

  return (
    <>
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
        <input type="submit" value="Submit" onClick={handleButtonClick} />
      </div>
    </>
  );
}
