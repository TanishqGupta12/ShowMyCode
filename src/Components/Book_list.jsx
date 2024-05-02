import React, { useEffect, useState, useRef } from "react";

import { ref as refs, get ,set, push  } from "firebase/database";

import { Database } from "../Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { itemcheckout } from "../util/item.js";
export default function Book_list() {
  const [getdata, setdata] = useState([]);
  const [getBook, setBook] = useState();

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

  const focusPoint = useRef(null);

  function ccurrentstatus() {
    // Prevent default behavior of the event (e.g., form submission)
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
      let collection ={
        user_id : currentuser,
        // Book_name : focusPoint.current.textContent
      }
      itemcheckout(collection)
    }
  }

  return (
    <>
         {/* {console.log(getdata)} */}
       <div class="product-container">
        {getdata.slice(0, 3).map((data, index) => (
          <div class="product-card" key={index}>
            <a href={data.file?.file} target="_blank">
              <img
                src={data.file.image}
                alt={data.Name}
                class="product-image"
              />
            </a>
            <h3 class="product-name">  {data.Name}</h3>
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
