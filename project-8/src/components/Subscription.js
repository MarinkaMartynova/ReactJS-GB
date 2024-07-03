import React from "react";
import intersectImg from "../img/Intersect.png";
import "../pages/styles.css";

function Subscription(props) {
  return (
    <section className="subscribe center">
      <div className="subscribe__info">
        <img src={intersectImg} alt="smiling woman" />
        <p className="subscribe__text">
          “Vestibulum quis porttitor dui! Quisque viverra nunc mi,{" "}
          <i>a pulvinar purus condimentum</i>“
        </p>
      </div>
      <div className="subscribe__content">
        <h2 className="subscribe__heading">SUBSCRIBE</h2>
        <p className="subscribe__content-text">
          FOR OUR NEWLETTER AND PROMOTION
        </p>
        <form className="subscribe__form" action="#">
          <input
            required
            placeholder="Enter Your Email"
            className="subscribe__input"
            type="email"
          />
          <button className="subscribe__button" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
export default Subscription;
