import React, { useEffect, useState } from "react";

import { ref as refs, get, set, push } from "firebase/database";

import { Database } from "../Firebase";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { itemcheckout } from "../util/item.js";
import { Link } from "react-router-dom";
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



  return (
    <>
      {/* {console.log(getdata)} */}
      <div class="product-container">
        {getdata.slice(0, 3).map((data, index) => (
          <div class="product-card" key={index}>
            <a href={data.file?.file} target="_blank" rel="noreferrer" >
              <img
                src={data.file.image}
                alt={data.Name}
                class="product-image"
              />
            </a>
            <h3 class="product-name"> {data.Name}</h3>
            {/* <p class="product-description">Product Description</p> */}
            <div class="product-price">$ {data.Price}</div>
            {/* <button class="add-to-cart-button" onClick={ccurrentstatus}>
              Buy
            </button> */}
            <Link
              to={`product/detail/${data.index}`}
              className="add-to-cart-button"
            >
              view
            </Link>
          </div>
        ))}
      {/* <ToastContainer /> */}
      </div>
    </>
  );
}
