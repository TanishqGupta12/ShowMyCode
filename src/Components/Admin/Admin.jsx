import React, { useState } from "react";
import  app from '../../Firebase';
import "./Admin.css";
import { Link } from "react-router-dom";
import ChecklistIcon from "@mui/icons-material/Checklist";
import AddIcon from "@mui/icons-material/Add";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
export default function Admin() {
  const [status, Setstatus] = useState({
    Book: "",
    Category: "",
    Details: "",
  });

  const [image, setImage] = useState("");
  const upload = () => {
    alert("tanishj")
    if (image == null) return;
    app
      .ref(`/images/${image.name}`)
      .put(image)
      .on("state_changed", alert("success"), alert);
  };

  const handleStatus = (e) => {
    const { name, value } = e.target;
    // console.log({ name, value });
    Setstatus((prevStatus) => ({
      ...prevStatus,
      [name]: value,
    }));

    setImage(e.target.files[0])
    console.log(image);
  };
  return (
    <>
      <div className="main_admin">
        <div className="admin_form">
        <form onSubmit={upload} >
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
              placeholder="Category"
              value={status.Category}
              onChange={handleStatus}
              name="Category"
            />
          </div>
          <div>
            <h2> Book Details </h2>
            <textarea
              placeholder="Details"
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
              placeholder="file"
              type="file"
              value={status.file}
              onChange={handleStatus}
              name="file"
            />
          </div>
          <div>
            <input type="Submit" value="Submit" onClick={handleStatus} />
          </div>
          </form>
          <div className="icon">
            <Link to="/List">
              <ChecklistIcon />
            </Link>
            <Link to="/admin">
              <AddIcon />
            </Link>
            <Link to="/admin">
              <AddAPhotoIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
