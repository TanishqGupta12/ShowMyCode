import React, { useState } from "react";
import "./Admin.css";
import { Link } from "react-router-dom";
import ChecklistIcon from "@mui/icons-material/Checklist";

import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { ref as refs, set, push } from "firebase/database";
import { storage, Database } from "../../Firebase";

export default function Admin() {
  const [status, Setstatus] = useState({
    Book: "",
    Category: "",
    Details: "",
  });

  const [imgUrl, setImgUrl] = useState(null);
  const [image, setimage] = useState("");

  const [file, setfile] = useState(null);
  const [fileUrl, setfileUrl] = useState("");

  const sendSubmit = () => {
    const dbRef = push(refs(Database, "Book"));
    console.log(imgUrl);
    // Push data to the database
    set(dbRef, {
      Name: status.Book,
      Category: status.Category,
      Details: status.Category,
      file: {
        image: imgUrl,
        file: fileUrl,
      },
    });
  };

  const uploadFile = (e) => {
    e.preventDefault();

    if (!image && !file) return;

    const fileStorageRef = ref(
      storage,
      `files/${status.Category}/${file.name}`
    );
    const imageStorageRef = ref(
      storage,
      `images/${status.Category}/${image.name}`
    );

    const fileUploadTask = uploadBytesResumable(fileStorageRef, file);
    const imageUploadTask = uploadBytesResumable(imageStorageRef, image);

    imageUploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(imageUploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
          console.log(downloadURL);
        });
      }
    );

    fileUploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(fileUploadTask.snapshot.ref).then((downloadURL) => {
          setfileUrl(downloadURL);
          console.log(downloadURL);
        });
      }
    );
  };

  const handleFileChange = (e) => {
    setimage(e.target.files[0]);
    setfile(e.target.files[0]);
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
          <form className="upload" onSubmit={uploadFile}>
            <input
              placeholder="file"
              type="file"
              onChange={handleFileChange}
              name="file"
            />

            <input
              placeholder="file"
              type="file"
              onChange={handleFileChange}
              name="file"
            />
            <input type="submit" value="upload" />
          </form>
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
                rows="4"
                cols="80"
                value={status.Details}
                onChange={handleStatus}
              ></textarea>
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
          <div className="icon">
            <Link to="/List">
              <ChecklistIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
