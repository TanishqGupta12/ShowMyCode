import React from "react";

import Reviews from "./Reviews";
import Section from "./Section";
import Booklist from "./Book_list";

export default function Home() {
  return (
    <>
      <Section />
      <Booklist />
      <div className="product_button">
        <a href="/book/list" className="buttonss default">
          More
        </a>
      </div>
      <Reviews />
    </>
  );
}
