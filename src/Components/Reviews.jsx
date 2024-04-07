import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Reviews() {
  return (
    <>
      <h2 className="Reviews_head">our reviews</h2>
      <div class="wrapper">
        <div class="review-card">
          <div class="header-content">
            <div class="img-area">
              <img alt="customer1" src={process.env.PUBLIC_URL + "/image/review_1.png"} />
            </div>
            <div class="info">
              <h4>John Doe</h4>
              <p>Maketing Manager</p>
            </div>
          </div>
          <div class="single-review">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor
              eveniet deleniti repellendus! Minima, dolorum.
            </p>
          </div>
          <div class="review-footer">
            <div class="rating">
              <span class="active">★</span>
              <span class="active">★</span>
              <span class="active">★</span>
              <span class="">★</span>
              <span class="">★</span>
            </div>
            <p>Reviewed on 01/01/2023</p>
          </div>
        </div>
        <div class="review-card">
          <div class="header-content">
            <div class="img-area">
              <img alt="customer1" src={process.env.PUBLIC_URL + "/image/review_2.png"} />
            </div>
            <div class="info">
              <h4>Mark Wood</h4>
              <p>Graphics Expert</p>
            </div>
          </div>
          <div class="single-review">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor
              eveniet deleniti repellendus! Minima, dolorum.
            </p>
          </div>
          <div class="review-footer">
            <div class="rating">
              <span class="active">★</span>
              <span class="active">★</span>
              <span class="">★</span>
              <span class="">★</span>
              <span class="">★</span>
            </div>
            <p>Reviewed on 01/02/2023</p>
          </div>
        </div>
        <div class="review-card">
          <div class="header-content">
            <div class="img-area">
              <img alt="customer1" src={process.env.PUBLIC_URL + "/image/review_3.png"} />
            </div>
            <div class="info">
              <h4>Jason Chedd</h4>
              <p>Web Designer</p>
            </div>
          </div>
          <div class="single-review">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor
              eveniet deleniti repellendus! Minima, dolorum.
            </p>
          </div>
          <div class="review-footer">
            <div class="rating">
              <span class="active">★</span>
              <span class="active">★</span>
              <span class="active">★</span>
              <span class="active">★</span>
              <span class="active">★</span>
            </div>
            <p>Reviewed on 01/03/2023</p>
          </div>
        </div>

        <div class="review-card">
          <div class="header-content">
            <div class="img-area">
              <img alt="customer1" src={process.env.PUBLIC_URL + "/image/review_4.png"} />
            </div>
            <div class="info">
              <h4>Jason Chedd</h4>
              <p>Web Designer</p>
            </div>
          </div>
          <div class="single-review">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor
              eveniet deleniti repellendus! Minima, dolorum.
            </p>
          </div>
          <div class="review-footer">
            <div class="rating">
              <span class="active">★</span>
              <span class="active">★</span>
              <span class="active">★</span>
              <span class="active">★</span>
              <span class="active">★</span>
            </div>
            <p>Reviewed on 01/03/2023</p>
          </div>
        </div>
      </div>
    </>
  );
}
