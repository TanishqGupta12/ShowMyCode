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
      <div className="Book_products">
        {getdata.slice(0, 4).map((data, index) => (
          <div class=" wrappers" key={index}>
            <div class="product-imgs">
              <img src={data.file?.image}  alt={data.Name} height="420" width="327" />
            </div>
            <div class="product-infos">
              <div class="product-texts">
                <h1>{data.Name}</h1>
                <h2>{data.Category} s</h2>
                <p>
                {data.Details}
                  {/* Harvest Vases are a reinterpretation
                  <br />
                  of peeled fruits and vegetables as
                  <br />
                  functional objects. The surfaces
                  <br />
                  appear to be sliced and pulled aside,
                  <br />
                  allowing room for growth. */}
                </p>
              </div>
              <div class="product-price-btns">
                <p>
                  <span>{data.Price}</span>$
                </p>
                <button type="button">buy now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
