// import React, { useState, useRef, useEffect } from "react";
// import "./Admin.css";
// import Aside from "../Admin/aside";

// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
// import { storage } from "../../Firebase";

// export default function Admin_upload() {
//   const [imgUrl, setImgUrl] = useState(null);
//   const [image, setImage] = useState("");

//   const [file, setFile] = useState(null);
//   const [fileUrl, setFileUrl] = useState("");

//   const [imageProgress, setImageProgress] = useState(0);
//   const [fileProgress, setFileProgress] = useState(0);

//   const uploadFile = () => {
//     if (!file) {
//       alert("Please select a file to upload.");
//       return;
//     }

//     try {
//       const fileStorageRef = ref(storage, `files/${file.name}`);

//       const fileUploadTask = uploadBytesResumable(fileStorageRef, file);

//       fileUploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           const progress = Math.round(
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//           );
//           setFileProgress(progress);
//           // console.log("File Upload Progress: ", progress + "%");
//         },
//         (error) => {
//           throw new Error("File upload failed: " + error.message);
//         },
//         async () => {
//           try {
//             const downloadURL = await getDownloadURL(fileStorageRef);
//             setFileUrl(downloadURL);
//             // console.log(
//             //   "File uploaded successfully. Download URL:",
//             //   downloadURL
//             // );
//             alert("File successfully uploaded");
//           } catch (error) {
//             console.error("Failed to get download URL:", error.message);
//             alert("Upload failed: " + error.message);
//           }
//         }
//       );
//     } catch (error) {
//       console.error("Upload failed:", error.message);
//       alert("Upload failed: " + error.message);
//     }
//   };

//   const uploadImage = () => {
//     if (!image) {
//       alert("Please select an image to upload.");
//       return;
//     }

//     try {
//       const imageStorageRef = ref(storage, `images/${image.name}`);

//       const imageUploadTask = uploadBytesResumable(imageStorageRef, image);

//       imageUploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           const progress = Math.round(
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//           );
//           setImageProgress(progress);
//           // console.log("Image Upload Progress: ", progress + "%");
//         },
//         (error) => {
//           throw new Error("Image upload failed: " + error.message);
//         },
//         async () => {
//           try {
//             const downloadURL = await getDownloadURL(imageStorageRef);
//             setImgUrl(downloadURL);
//             // console.log(
//             //   "Image uploaded successfully. Download URL:",
//             //   downloadURL
//             // );
//             alert("Image successfully uploaded");
//           } catch (error) {
//             console.error("Failed to get download URL:", error.message);
//             alert("Upload failed: " + error.message);
//           }
//         }
//       );
//     } catch (error) {
//       console.error("Upload failed:", error.message);
//       alert("Upload failed: " + error.message);
//     }
//   };
//   useEffect(()=>{
//     localStorage.setItem("file", fileUrl);
//     localStorage.setItem("image", imgUrl);
//   }, [imgUrl , fileUrl])

//   const inputImageRef = useRef(null);
//   const handleTextImageClick = () => {
//     inputImageRef.current.click();
//   };

//   const inputFileRef = useRef(null);
//   const handleTextFileClick = () => {
//     inputFileRef.current.click();
//   };

//   return (
//     <>
//       <div className="admin_upload">
//         <div className="container">
//           <div className="card">
//             <h3>Upload Image</h3>
//             <div className="drop_box">
//               <header>
//                 <h4
//                   onClick={handleTextImageClick}
//                   style={{ cursor: "pointer" }}
//                 >
//                   Select Image here
//                 </h4>
//               </header>
//               <p>Progress {imageProgress}</p>
//               <input
//                 ref={inputImageRef}
//                 hidden
//                 accept="image/*"
//                 type="file"
//                 onChange={(e) => {
//                   setImage(e.target.files[0]);
//                 }}
//                 name="image"
//               />
//               <button className="btn" onClick={uploadImage}>
//                 Submit Image
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="container">
//           <div className="card">
//             <h3>Upload Files</h3>
//             <div className="drop_box">
//               <header>
//                 <h4 onClick={handleTextFileClick} style={{ cursor: "pointer" }}>
//                   Select File here
//                 </h4>
//               </header>
//               <p>Progress {fileProgress}</p>
//               <input
//                 ref={inputFileRef}
//                 hidden
//                 accept=".doc,.docx,.pdf"
//                 type="file"
//                 onChange={(e) => {
//                   setFile(e.target.files[0]);
//                 }}
//                 name="file"
//               />
//               <button className="btn" onClick={uploadFile}>
//                 Submit File
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="aside_nav" >
//         <Aside />
//       </div>
//     </>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import "./Admin.css";
import Aside from "../Admin/aside";

// Import the necessary functions from the Modular SDK
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../Firebase";

export default function Admin_upload() {
  const [imgUrl, setImgUrl] = useState(null);
  const [image, setImage] = useState("");

  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");

  const [imageProgress, setImageProgress] = useState(0);
  const [fileProgress, setFileProgress] = useState(0);

  const uploadFile = () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const fileStorageRef = ref(storage, `files/${file.name}`);
    const fileUploadTask = uploadBytesResumable(fileStorageRef, file);

    fileUploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setFileProgress(progress);
      },
      (error) => {
        console.error("File upload failed:", error);
        alert("File upload failed: " + error.message);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(fileStorageRef);
          setFileUrl(downloadURL);
          alert("File successfully uploaded");
        } catch (error) {
          console.error("Failed to get download URL:", error);
          alert("Upload failed: " + error.message);
        }
      }
    );
  };

  const uploadImage = () => {
    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    const imageStorageRef = ref(storage, `images/${image.name}`);
    const imageUploadTask = uploadBytesResumable(imageStorageRef, image);

    imageUploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setImageProgress(progress);
      },
      (error) => {
        console.error("Image upload failed:", error);
        alert("Image upload failed: " + error.message);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(imageStorageRef);
          setImgUrl(downloadURL);
          alert("Image successfully uploaded");
        } catch (error) {
          console.error("Failed to get download URL:", error);
          alert("Upload failed: " + error.message);
        }
      }
    );
  };

  useEffect(() => {
    localStorage.setItem("file", fileUrl);
    localStorage.setItem("image", imgUrl);
  }, [imgUrl, fileUrl]);

  const inputImageRef = useRef(null);
  const handleTextImageClick = () => {
    inputImageRef.current.click();
  };

  const inputFileRef = useRef(null);
  const handleTextFileClick = () => {
    inputFileRef.current.click();
  };

  return (
    <>
      <div className="admin_upload">
        <div className="container">
          <div className="card">
            <h3>Upload Image</h3>
            <div className="drop_box">
              <header>
                <h4
                  onClick={handleTextImageClick}
                  style={{ cursor: "pointer" }}
                >
                  Select Image here
                </h4>
              </header>
              <p>Progress {imageProgress}</p>
              <input
                ref={inputImageRef}
                hidden
                accept="image/*"
                type="file"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
                name="image"
              />
              <button className="btn" onClick={uploadImage}>
                Submit Image
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <h3>Upload Files</h3>
            <div className="drop_box">
              <header>
                <h4
                  onClick={handleTextFileClick}
                  style={{ cursor: "pointer" }}
                >
                  Select File here
                </h4>
              </header>
              <p>Progress {fileProgress}</p>
              <input
                ref={inputFileRef}
                hidden
                accept=".doc,.docx,.pdf"
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                name="file"
              />
              <button className="btn" onClick={uploadFile}>
                Submit File
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="aside_nav">
        <Aside />
      </div>
    </>
  );
}