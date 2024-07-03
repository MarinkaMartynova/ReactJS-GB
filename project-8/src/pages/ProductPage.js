import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Subscription from "../components/Subscription";
import "./styles.css";
import slider from "../img/slider.png";

const ProductPage = () => {
  return (
    <>
      <Header />
      <div className="breadcrumbs center">
        <h2 className="breadcrumbs__heading">NEW ARRIVALS</h2>
        <nav>
          <ul className="breadcrumbs__nav">
            <li className="breadcrumbs__list">
              <Link className="breadcrumb__link" href="index.html">
                HOME
              </Link>
            </li>
            <li className="breadcrumbs__list">
              <Link className="breadcrumb__link" href="#">
                MEN
              </Link>
            </li>
            <li className="breadcrumbs__list">
              <Link className="breadcrumb__link" href="#">
                NEW ARRIVALS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="slider">
        <Link href="#" className="slider__arrow slider__arrow_left"></Link>
        <img className="slider_img" src={slider} alt="slider" />
        <Link href="#" className="slider__arrow slider__arrow_right"></Link>
      </div>
      <div className="center">
        <section className="content">
          <h3 className="content__heading">WOMEN COLLECTION</h3>
          <div className="content__line"></div>
          <h2 className="content__h2">MOSCHINO CHEAP AND CHIC</h2>
          <p className="content__text">
            Compellingly actualize fully researched processes before proactive
            outsourcing. Progressively syndicate collaborative architectures
            before cutting-edge services. Completely visualize parallel core
            competencies rather than exceptional portals.
          </p>
          <div className="content__price">$561</div>
          <div className="content__hr"></div>
        </section>
      </div>
      <Subscription />
      <Footer />
    </>
  );
};

export default ProductPage;
