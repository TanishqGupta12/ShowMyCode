import React, { useState } from "react";
import "./Admin.css";
import { Link } from "react-router-dom";

import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
// import { ref as refs, set, push } from "firebase/database";
import { storage } from "../../Firebase";

export default function Admin_upload() {
  const [imgUrl, setImgUrl] = useState(null);
  const [image, setimage] = useState("");

  const [file, setfile] = useState(null);
  const [fileUrl, setfileUrl] = useState("");
  const uploadFile = () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    try {
      const fileStorageRef = ref(
        storage,
        `files/${status.Category}/${file.name}`
      );

      const fileUploadTask = uploadBytesResumable(fileStorageRef, file);

      fileUploadTask.on(
        "state_changed",
        (snapshot) => {
          // Track upload progress if needed
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("File Upload Progress: ", progress + "%");
        },
        (error) => {
          throw new Error("File upload failed: " + error.message);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(fileStorageRef);
            setfileUrl(downloadURL);
            console.log(
              "File uploaded successfully. Download URL:",
              downloadURL
            );
            alert("File successfully uploaded");
          } catch (error) {
            console.error("Failed to get download URL:", error.message);
            alert("Upload failed: " + error.message);
          }
        }
      );
    } catch (error) {
      console.error("Upload failed:", error.message);
      alert("Upload failed: " + error.message);
    }
  };

  const uploadImage = () => {
    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    try {
      const imageStorageRef = ref(
        storage,
        `images/${status.Category}/${image.name}`
      );

      const imageUploadTask = uploadBytesResumable(imageStorageRef, image);

      imageUploadTask.on(
        "state_changed",
        (snapshot) => {
          // Track upload progress if needed
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("File Upload Progress: ", progress + "%");
        },
        (error) => {
          throw new Error("Image upload failed: " + error.message);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(imageStorageRef);
            setImgUrl(downloadURL);
            console.log(
              "Image uploaded successfully. Download URL:",
              downloadURL
            );
            alert("Image successfully uploaded");
          } catch (error) {
            console.error("Failed to get download URL:", error.message);
            alert("Upload failed: " + error.message);
          }
        }
      );
    } catch (error) {
      console.error("Upload failed:", error.message);
      alert("Upload failed: " + error.message);
    }
  };
  return (
    <>
      <table class="table">
        <tr>
          <td scope="row">Book file</td>
          <td>
            <input
              placeholder="file"
              type="file"
              onChange={(e) => {
                setfile(e.target.files[0]);
              }}
              name="file"
            />
          </td>
          <td>
            <input type="submit" value="upload" onClick={uploadFile} />
          </td>
        </tr>
        <tr>
          <td scope="row">Book image</td>
          <td>
            <input
              placeholder="image"
              type="file"
              onChange={(e) => {
                setimage(e.target.files[0]);
              }}
              name="file"
            />
          </td>
          <td>
            <input type="submit" value="upload" onClick={uploadImage} />
          </td>
        </tr>
      </table>
    </>
  );
}
