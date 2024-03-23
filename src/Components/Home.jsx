import React from "react";

import Reviews from "./Reviews";
import Section from "./Section";
import Book_list from "./Book_list";

export default function Home() {
  return (
    <>
      <Section />
      <Book_list />
      <div className="product_button">
        <a href="/book/list" className="buttonss default">
          More
        </a>
      </div>
      <Reviews />
    </>
  );
}
