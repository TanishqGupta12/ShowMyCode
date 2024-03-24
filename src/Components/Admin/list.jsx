import React, { useEffect, useState } from "react";

import { ref as refs, get } from "firebase/database";

import { Database } from "../../Firebase";
import Aside from "../Admin/aside";
export default function List() {
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
    <Aside />
      <div className="main_table">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Book Name</th>
              <th scope="col">Category</th>
              <th scope="col">Book Price</th>
              <th scope="col">Book Image</th>
            </tr>
          </thead>
          <tbody>
            {getdata && getdata.length !== 0 ? (
              getdata.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.Name}</td>
                  <td>{data.Category}</td>
                  <td>{data && data.Price !== undefined ? data.Price : "N/A"}</td>
                  <td>
                    {data.file?.file && data.file?.image ? (
                      <a href={data.file.file} target="_blank" rel="noreferrer">
                        <img className="imager" src={data.file.image} alt="" />
                      </a>
                    ) : (
                      <span>No image available</span>
                      )}
                  </td>
                </tr>
              ))
              ) : (
                <tr>
                <td colSpan="4">No data available in the database</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
