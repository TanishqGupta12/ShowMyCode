import React, { useState } from "react";

import "./Admin.css";
import { Link } from "react-router-dom";
import ChecklistIcon from "@mui/icons-material/Checklist";
import AddIcon from '@mui/icons-material/Add';
export default function Admin() {
  const [status, Setstatus] = useState({
    Book: "",
    Category: "",
    Details: "",
    file: "",
  });

  const handleStatus = (e) => {
    const { name, value } = e.target;
    // console.log({ name, value });
    Setstatus((prevStatus) => ({
      ...prevStatus,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="main_admin">
        <div className="admin_form">
          <div>
            <h2> Book Name </h2>
            <input
              type="text"
              placeholder="Name"
              value={status.Book}
              onChange={handleStatus}
              name="Book"
            />
          </div>
          <div>
            <h2> Book Category </h2>

            <input
              type="text"
              value={status.Category}
              onChange={handleStatus}
              name="Category"
            />
          </div>
          <div>
            <h2> Book Details </h2>
            <textarea
              id="w3review"
              name="Details"
              rows="4"
              cols="80"
              value={status.Details}
              onChange={handleStatus}
            ></textarea>
          </div>
          <div>
            <input
              type="file"
              value={status.file}
              onChange={handleStatus}
              name="file"
            />
          </div>
          <div>
            <input type="Submit" value="Submit" onClick={handleStatus} />
          </div>
          <div className="icon">
            <Link to="/List">
              <ChecklistIcon />
            </Link>
            <Link to="/admin">
              <AddIcon />
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
