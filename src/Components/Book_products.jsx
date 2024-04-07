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
        {getdata.slice(0, 4).map((data, index) => (
          <div class=" product-card" key={index}>
            {/* <div class="badge">Hot</div> */}
            <div class="product-tumb">
              <img src={data.file?.image} alt={data.Name} />
            </div>
            <div class="product-details">
              <span class="product-catagory">{data.Category} sds</span>
              <h4>
                <a href={data.file?.file}>{data.Name}</a>
              </h4>
              <p>{data.Details}</p>
              <div class="product-bottom-details">
                <div class="product-price">Price :{data.Price}</div>
                {/* <div class="product-links">
                  <a href="">
                    <i class="fa fa-heart"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div class="wrapper">
        <div class="container">
          <div class="top"></div>
          <div class="bottom">
            <div class="left">
              <div class="details">
                <h1>Chair</h1>
                <p>£250</p>
              </div>
              <div class="buy">
                <i class="material-icons">add_shopping_cart</i>
              </div>
            </div>
            <div class="right">
              <div class="done">
                <i class="material-icons">done</i>
              </div>
              <div class="details">
                <h1>Chair</h1>
                <p>Added to your cart</p>
              </div>
              <div class="remove">
                <i class="material-icons">clear</i>
              </div>
            </div>
          </div>
        </div>
        <div class="inside">
          <div class="icon">
            <i class="material-icons">info_outline</i>
          </div>
          <div class="contents">
            <table>
              <tr>
                <th>Width</th>
                <th>Height</th>
              </tr>
              <tr>
                <td>3000mm</td>
                <td>4000mm</td>
              </tr>
              <tr>
                <th>Something</th>
                <th>Something</th>
              </tr>
              <tr>
                <td>200mm</td>
                <td>200mm</td>
              </tr>
              <tr>
                <th>Something</th>
                <th>Something</th>
              </tr>
              <tr>
                <td>200mm</td>
                <td>200mm</td>
              </tr>
              <tr>
                <th>Something</th>
                <th>Something</th>
              </tr>
              <tr>
                <td>200mm</td>
                <td>200mm</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
