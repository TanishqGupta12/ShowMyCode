import React, { useEffect, useState, useRef } from "react";

import { ref as refs, get } from "firebase/database";

import { Database } from "../Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Book_list() {
  const [getdata, setdata] = useState([]);


  useEffect(() => {

    const fetchData = async () => {
      const snapshot = await get(refs(Database, "Book"));
  
      snapshot.val() !== null
        ? setdata(Object.values(snapshot.val()))
        : setdata(false);
    };
    fetchData();
    // console.log(getdata[0]);
  });

  const cureentstatus = useRef(null);
  function ccurrentstatus(event) {
    event.preventDefault(); // Prevent default behavior of the event (e.g., form submission)
    var currentuser = sessionStorage.getItem("currentuser");
    if (!currentuser) {
        console.log(currentuser);
        toast("Please login", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
        });
    } else {
        // Handle the case when currentuser is truthy
        console.log("User is logged in:", currentuser);
    }
}

  return (
    <>
      <div class="product-container">
        {getdata.slice(0, 4).map((data, index) => (
          <div class="product-card" key={index}>
            <a href={data.file?.file} target="_blank">
              <img
                src={data.file.image}
                alt={data.Name}
                class="product-image"
              />
            </a>
            <h3 class="product-name">{data.Name}</h3>
            {/* <p class="product-description">Product Description</p> */}
            <div class="product-price">$ {data.Price}</div>
            <button class="add-to-cart-button" onClick={ccurrentstatus}>
              Buy
            </button>
          </div>
        ))}
      </div>
        <ToastContainer />
    </>
  );
}
