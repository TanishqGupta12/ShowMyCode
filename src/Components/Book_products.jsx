import React, { useEffect, useState } from "react";

import { ref as refs, get } from "firebase/database";

import { Database } from "../Firebase";

import "./Book.css";
export default function Book_products() {
  const [getdata, setdata] = useState([]);
  const fetchData = async () => {
    const snapshot = await get(refs(Database, "Book"));

    snapshot.val() !== null
      ? setdata(Object.values(snapshot.val()))
      : setdata(false);
  };

  useEffect(() => {
    fetchData();
    // console.log(getdata[0]);
  });

  return (
    <>
      <div className="produc_head">
        <div className="product-container">
          {getdata.map((data, index) => (
            <div className="product-card" key={index}>
              <a href={data.file?.file} target="_blank" rel="noreferrer">
                <img
                  src={data.file.image}
                  alt={data.Name}
                  className="product-image"
                />
              </a>
              <h3 className="product-name"> {data.Name}</h3>
              {/* <p className="product-description">Product Description</p> */}
              <div className="product-price">$ {data.Price}</div>
              <button className="add-to-cart-button" >
                Buy
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
