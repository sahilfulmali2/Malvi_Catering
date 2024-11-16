import React from "react";
import "./Home.css";
import chef from "../assets/chef.webp"
export default function Home() {
  return (
    <div className="container">
      <div className="inner">
        <img src={chef} alt="" />
        <span className="owner">
          <h2>Contact Us</h2>
          <div className="details">
            <h3>Shubham Malvi</h3>
            <a
              href="tel:+919131230115"
              style={{ textDecoration: "none", color: "#000" }}
            >
              +91 9131230115
            </a>
          </div>
          <div className="details">
            <h3>Ashish Malvi</h3>
            <a
              href="tel:+918109724381"
              style={{ textDecoration: "none", color: "#000" }}
            >
              +91 8109724381
            </a>
          </div>
        </span>
      </div>
    </div>
  );
}
