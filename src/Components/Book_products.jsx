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
        {getdata.map((data, index) => (
          // <div class=" product-card" key={index}>
          //   {/* <div class="badge">Hot</div> */}
          //   <div class="product-tumb">
          //     <img src={data.file?.image} alt={data.Name} />
          //   </div>
          //   <div class="product-details">
          //     <span class="product-catagory">Category: {data.Category}</span>
          //     <h4>
          //       <a href={data.file?.file}>{data.Name}</a>
          //     </h4>
          //     <p>{data.Details}</p>
          //     <div class="product-bottom-details">
          //       <div class="product-price">Price :{data.Price}</div>
          //       <div class="product-links">
          //         <a href="">
          //           <i class="fa fa-heart"></i>
          //         </a>
          //         <a href="">
          //           <i class="fa fa-shopping-cart"></i>
          //         </a>
          //       </div>
          //     </div>
          //   </div>
          // </div>
          <div class="product-card" key={index}>
              <a href={data.file?.file} target="_blank" without rel="noreferrer">
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
