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
      <div className="head_card">
        {getdata.slice(0, 4).map((data, index) => (
          <div className="card_paading">
            <article className="card_main" key={index}>
              <a href={data.file?.file} target="_blank">
                <img
                  className="card__background"
                  src={data.file.image}
                  alt={data.Name}
                  width="1920"
                  height="2193"
                />
              </a>

              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">{data.Name}</h2>
                  <a>
                  <p className="card__description">Price: {data.Price}</p>
                  </a>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </>
  );
}
