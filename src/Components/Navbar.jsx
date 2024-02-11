import React from "react";
import "bootstrap/dist/css/bootstrap.css";
function Navbar() {
  return (
    <>
      <section>
        <nav>
          <div class="logo">
          <img src={process.env.PUBLIC_URL + './logo.png'} alt='...' />
          </div>
          <div id="title" class="d-flex justify-content-center">
            <h2>BookMyCode</h2>
          </div>
          <div class="social_icon">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </nav>

        <div class="main">
          <div class="main_tag">
            <h1>WELCOME TO<br/><span>BOOK STORE</span></h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              molestias atque laborum non fuga ex deserunt. Exercitationem velit
              ducimus praesentium, obcaecati hic voluptate id tenetur fuga illum
              quidem omnis? Rerum?
            </p>
            <a href="#" class="main_btn">
              Learn More
            </a>
          </div>

          <div class="main_img">
            <img src="image/b.png" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
