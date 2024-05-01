import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Footer() {
  return (
    <>
      <footer id="picassoFooter">
        <div class="footer-navigation">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/About">About Us</a>
            </li>
            <li>
              <a href="/Blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div class="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div class="footer-social">
          <h3>Follow Us</h3>
          <div class="social-icons">
            <a href="https://facebook.com" target="_blank" class="social-icon" rel="noreferrer">
              FB
            </a>
            <a href="https://twitter.com" target="_blank" class="social-icon" rel="noreferrer">
              TW
            </a>
            <a href="https://instagram.com" target="_blank" class="social-icon" rel="noreferrer">
              IG
            </a>
          </div>
        </div>
        <div class="footer-art">
          <canvas id="picassoCanvas"></canvas>
        </div>
      </footer>
    </>
  );
}
