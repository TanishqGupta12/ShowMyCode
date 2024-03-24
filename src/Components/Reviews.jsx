import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Reviews() {
  return (
    <>
      <h2 className="Reviews_head" >our reviews</h2>
      <section className="Reviews">
        <div class="review-item-container">
          <div class="review-item-image">
            <img
              src="https://i.dailymail.co.uk/i/pix/2013/08/29/article-2405475-1B8389EE000005DC-718_634x550.jpg"
              alt=""
            />
            <div class="review-person-title">
              <p>Mark Henry</p>
              <p>Chief executive on Google chrome</p>
            </div>
          </div>

          <div class="star-and-review">
            <div>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="review-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                nam molestias vitae. Voluptate, magni ea. Fugiat recusandae
                sapiente cupiditate ducimus!
              </p>
            </div>
          </div>
        </div>
        <div class="review-item-container">
          <div class="review-item-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQznzb8h1HuAopooRY9fIDf_B_br6FLZvKEw&usqp=CAU"
              alt=""
            />
            <div class="review-person-title">
              <p>Mark Henry</p>
              <p>Chief executive on Google chrome</p>
            </div>
          </div>

          <div class="star-and-review">
            <div>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="review-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                nam molestias vitae. Voluptate, magni ea. Fugiat recusandae
                sapiente cupiditate ducimus!
              </p>
            </div>
          </div>
        </div>
        <div class="review-item-container">
          <div class="review-item-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz6deRdLZckXPILhR9HCyvO9veoxK760LYsV3sRzWncDjt5CrB1tVO6ADdebz1VpXhVYM&usqp=CAU"
              alt=""
            />
            <div class="review-person-title">
              <p>Mark Henry</p>
              <p>Chief executive on Google chrome</p>
            </div>
          </div>

          <div class="star-and-review">
            <div>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="review-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                nam molestias vitae. Voluptate, magni ea. Fugiat recusandae
                sapiente cupiditate ducimus!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
