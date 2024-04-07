import React, { useEffect, useState } from "react";

import { ref as refs, get } from "firebase/database";

import { Database } from "../Firebase";

export default function Book_list() {
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
              <button class="add-to-cart-button">Add to Cart</button>
            </div>
          ))}
        </div>
    </>
  );
}
