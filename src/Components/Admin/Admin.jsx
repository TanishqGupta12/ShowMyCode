import React, { useState } from "react";
import "./Admin.css";

// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage
import { ref as refs, set, push } from "firebase/database";
import { Database } from "../../Firebase";

import Aside from "../Admin/aside";
export default function Admin() {
  const [status, Setstatus] = useState({
    Book: "",
    Category: "",
    Details: "",
    Price: "",
  });

  const sendSubmit = () => {
    const dbRef = push(refs(Database, "Book"));
    // Push data to the database
    set(dbRef, {
      Name: status.Book,
      Category: status.Category,
      Details: status.Details,
      Price: status.Price,
      file: {
        image: localStorage.getItem("image"),
        file: localStorage.getItem("file"),
      },
    });
    alert("data successfully uploaded");
    // console.log( {
    //   image: localStorage.getItem("image"),
    //   file: localStorage.getItem("file"),
    // });
    localStorage.clear();
  };


  const handleStatus = (e) => {
    const { name, value } = e.target;
    Setstatus((prevStatus) => ({
      ...prevStatus,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendSubmit();
  };
  
  return (
    <>
      <div className="main_admin">
        <div className="admin_form">
          <form onSubmit={handleSubmit}>
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
                rows="3"
                cols="80"
                value={status.Details}
                onChange={handleStatus}
              ></textarea>
            </div>
            <div>
              <h2> Book Price </h2>

              <input
                type="text"
                placeholder="Price"
                value={status.Price}
                onChange={handleStatus}
                name="Price"
              />
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      <Aside />
    </>
  );
}
