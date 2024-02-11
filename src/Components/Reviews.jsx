import React from "react";

export default function Reviews() {
  return (
    <>
      
      <div class="reviews">
        <h1>Reviews</h1>

        <div class="review_box">

            <div class="review_card">
                <i class="fa-solid fa-quote-right"></i>
                <div class="card_top">
                    <img src={process.env.PUBLIC_URL + './image/review_1.png'} alt=".." />
                </div>
                <div class="card">
                    <h2>John Deo</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eos doloribus iure
                        distinctio! Eos dolorem quam, nisi amet saepe totam, quas quidem laboriosam dolore,
                        tenetur itaque nostrum voluptas excepturi aut.
                    </p>
                    <div class="review_icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                </div>
            </div>

            <div class="review_card">
                <i class="fa-solid fa-quote-right"></i>
                <div class="card_top">
                    <img src={process.env.PUBLIC_URL + './image/review_2.png'} alt=".." />
                </div>
                <div class="card">
                    <h2>John Deo</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eos doloribus iure
                        distinctio! Eos dolorem quam, nisi amet saepe totam, quas quidem laboriosam dolore,
                        tenetur itaque nostrum voluptas excepturi aut.
                    </p>
                    <div class="review_icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                </div>
            </div>

            <div class="review_card">
                <i class="fa-solid fa-quote-right"></i>
                <div class="card_top">
                    <img src={process.env.PUBLIC_URL + './image/review_3.png'} alt=".." />
                </div>
                <div class="card">
                    <h2>John Deo</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eos doloribus iure
                        distinctio! Eos dolorem quam, nisi amet saepe totam, quas quidem laboriosam dolore,
                        tenetur itaque nostrum voluptas excepturi aut.
                    </p>
                    <div class="review_icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                </div>
            </div>

            <div class="review_card">
                <i class="fa-solid fa-quote-right"></i>
                <div class="card_top">
                    <img src={process.env.PUBLIC_URL + './image/review_4.png'} alt=".." />
                </div>
                <div class="card">
                    <h2>John Deo</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eos doloribus iure
                        distinctio! Eos dolorem quam, nisi amet saepe totam, quas quidem laboriosam dolore,
                        tenetur itaque nostrum voluptas excepturi aut.
                    </p>
                    <div class="review_icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                </div>
            </div>

        </div>

    </div>
    </>
  );
}
