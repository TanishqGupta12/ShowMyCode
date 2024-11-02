import React from "react";

export default function Blog() {
  return (
    <>
      <div className="banner">
        <a href="#blog" className="banner_btn">
          Learn More
        </a>
      </div>

      <div className="blog" id="blog">
        <h1>Our Blog</h1>
        <div className="blog_box">
          <div className="blog_card">
            <div className="blog_img">
              <img src="image/blog_1.jpg" alt=".." />
            </div>
            <div className="blog_tag">
              <h2>Bloger</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                quos quis quasi ut impedit reiciendis voluptatem rem esse
                ratione omnis, laudantium earum. Aperiam nesciunt dolore aliquam
                repellat consequatur amet ducimus.
              </p>
              <div className="blog_icon">
                <i className="fa-solid fa-calendar-days"></i>
                <i className="fa-solid fa-heart"></i>
              </div>
            </div>
          </div>

          <div className="blog_card">
            <div className="blog_img">
              <img src="image/blog_2.jpg" alt=".." />
            </div>
            <div className="blog_tag">
              <h2>Bloger</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                quos quis quasi ut impedit reiciendis voluptatem rem esse
                ratione omnis, laudantium earum. Aperiam nesciunt dolore aliquam
                repellat consequatur amet ducimus.
              </p>
              <div className="blog_icon">
                <i className="fa-solid fa-calendar-days"></i>
                <i className="fa-solid fa-heart"></i>
              </div>
            </div>
          </div>

          <div className="blog_card">
            <div className="blog_img">
              <img src="image/blog_3.jpg" alt=".." />
            </div>
            <div className="blog_tag">
              <h2>Bloger</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                quos quis quasi ut impedit reiciendis voluptatem rem esse
                ratione omnis, laudantium earum. Aperiam nesciunt dolore aliquam
                repellat consequatur amet ducimus.
              </p>
              <div className="blog_icon">
                <i className="fa-solid fa-calendar-days"></i>
                <i className="fa-solid fa-heart"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
