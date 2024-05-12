import React, { useState } from "react";
import { Link } from "react-router-dom";
import Reviews from "./Reviews";
import Section from "./Section";
import Booklist from "./Book_list";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

export default function Home() {
  const [getlink, setLink] = useState(false);

  var currentuser = sessionStorage.getItem("currentuser");

  useEffect(() => {
    if (currentuser) {
      setLink(true);
    }
  }, [currentuser]);

  function handleClick() {
    if (!currentuser) {
      console.log(" not login check");
      toast.error("Please login", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <>
      <ToastContainer />
      <Section />
      <Booklist />
      <div className="product_button">
        {console.log(getlink)}
        <Link
          to={getlink ? "/book/list" : ""}
          className="buttonss default"
          onClick={handleClick}
        >
          More
        </Link>
      </div>
      <Reviews />
    </>
  );
}
