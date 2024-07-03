import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import product1 from "../img/product1.jpg";
import product7 from "../img/cart-item2.png";
import product3 from "../img/cart-item1.jpg";
import product4 from "../img/product4.jpg";
import product8 from "../img/product8.png";
import product9 from "../img/product9.png";
import product10 from "../img/product10.png";
import product11 from "../img/product11.png";
import product12 from "../img/product12.png";
import advantagesImg1 from "../img/advantages_img1.svg";
import advantagesImg2 from "../img/promo2.png";
import advantagesImg3 from "../img/promo3.png";
import Subscription from "../components/Subscription";
import "./styles.css";

const products = [
  {
    img: product1,
    title: "ELLERY X M'O CAPSULE",
    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "$52.00",
    size: "XS",
  },
  {
    img: product7,
    title: "ELLERY X M'O CAPSULE",
    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "$52.00",
    size: "M",
  },
  {
    img: product3,
    title: "ELLERY X M'O CAPSULE",
    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "$52.00",
    size: "L",
  },
  {
    img: product4,
    title: "ELLERY X M'O CAPSULE",
    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "$52.00",
    size: "S",
  },
  {
    img: product8,
    title: "ELLERY X M'O CAPSULE",
    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "$52.00",
    size: "L",
  },
  {
    img: product9,
    title: "ELLERY X M'O CAPSULE",
    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "$52.00",
    size: "L",
  },
  {
    img: product10,
    title: "ELLERY X M'O CAPSULE",
    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "$52.00",
    size: "M",
  },
  {
    img: product11,
    title: "ELLERY X M'O CAPSULE",
    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "$52.00",
    size: "S",
  },
  {
    img: product12,
    title: "ELLERY X M'O CAPSULE",
    text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    price: "$52.00",
    size: "L",
  },
];

function CatalogPage() {
  const [selectedSize, setSelectedSize] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedSize === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.size === selectedSize)
      );
    }
  }, [selectedSize]);

  return (
    <div>
      <Header />

      <div class="droplist">
        <div class="filter1 ">
          <details class="filter1_list">
            <summary class="filter1_summary">
              <span class="filter1_list_title">FILTER</span>{" "}
              <svg
                class="svgpicture"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="10"
                viewBox="0 0 15 10"
                fill="none"
              >
                <path
                  d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                  fill="black"
                />
              </svg>
            </summary>
            <div class="filter1_list_content">
              <details class="filter1_list_content_item">
                <summary class="filter1_summary_item">CATEGORY</summary>
                <div class="filter_box">
                  <Link class="filter1__link">Accessories</Link>
                  <Link class="filter1__link">Bags</Link>
                  <Link class="filter11__link">Denim</Link>
                  <Link class="filter1__link"> Hoodies & Sweatshirts </Link>
                  <Link class="filter1__link">Jackets & Coats</Link>
                  <Link class="filter1__link">Polos</Link>
                  <Link class="filter1__link">Shirts</Link>
                  <Link class="filter1__link">Shoes</Link>
                  <Link class="filter1__link">Sweaters & Knits</Link>
                  <Link class="filter1__link">T-Shirts</Link>
                  <Link class="filter1__link">Tanks</Link>
                </div>
              </details>
              <details class="filter_list_content_item">
                <summary class="filter1_summary_item">BRAND</summary>
                <div class="filter_box">
                  <Link class="filter1__link">Accessories</Link>
                  <Link class="filter1__link">Bags</Link>
                  <Link class="filter1__link">Denim</Link>
                  <Link class="filter1__link"> Hoodies & Sweatshirts </Link>
                  <Link class="filter1__link">Jackets & Coats</Link>
                  <Link class="filter11__link">Polos</Link>
                  <Link class="filter1__link">Shirts</Link>
                  <Link class="filter1__link">Shoes</Link>
                  <Link class="filter1__link">Sweaters & Knits</Link>
                  <Link class="filter1__link">T-Shirts</Link>
                  <Link class="filter1__link">Tanks</Link>
                </div>
              </details>
              <details class="filter1_list_content_item">
                <summary class="filter1_summary_item">DESIGNER</summary>
                <div class="filter_box">
                  <Link class="filter1__link">Accessories</Link>
                  <Link class="filter1__link">Bags</Link>
                  <Link class="filter1__link">Denim</Link>
                  <Link class="filter1__link"> Hoodies & Sweatshirts </Link>
                  <Link class="filter1__link">Jackets & Coats</Link>
                  <Link class="filter1__link">Polos</Link>
                  <Link class="filter1__link">Shirts</Link>
                  <Link class="filter1__link">Shoes</Link>
                  <Link class="filter1__link">Sweaters & Knits</Link>
                  <Link class="filter1__link">T-Shirts</Link>
                  <Link class="filter1__link">Tanks</Link>
                </div>
              </details>
            </div>
          </details>
        </div>
        <div class="sort">
          <details class="sort__details">
            <summary class="sort__summary">
              <span class="sort__heading whidt_tr">TRENDING NOW</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
              >
                <path
                  d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                  fill="#6F6E6E"
                />
              </svg>
            </summary>
          </details>

          <details class="sort__details">
            <summary class="sort__summary">
              <span class="sort__heading">SIZE</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
              >
                <path
                  d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                  fill="#6F6E6E"
                />
              </svg>
            </summary>

            <div class="sort__box">
              <div class="sort__check">
                <input
                  type="radio"
                  value="XS"
                  name="Link"
                  id="checkbox-XS"
                  onChange={(e) => setSelectedSize(e.target.value)}
                />
                <label for="checkbox-XS">XS</label>
              </div>
              <div class="sort__check">
                <input
                  type="radio"
                  value="S"
                  name="Link"
                  id="checkbox-S"
                  onChange={(e) => setSelectedSize(e.target.value)}
                />
                <label for="checkbox-S">S</label>
              </div>
              <div class="sort__check">
                <input
                  type="radio"
                  value="M"
                  name="Link"
                  id="checkbox-M"
                  onChange={(e) => setSelectedSize(e.target.value)}
                />
                <label for="checkbox-M">M</label>
              </div>
              <div class="sort__check">
                <input
                  type="radio"
                  value="L"
                  name="Link"
                  id="checkbox-L"
                  onChange={(e) => setSelectedSize(e.target.value)}
                />
                <label for="checkbox-L">L</label>
              </div>
            </div>
          </details>

          <details class="sort__details">
            <summary class="sort__summary">
              <span class="sort__heading">PRICE</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
              >
                <path
                  d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                  fill="#6F6E6E"
                />
              </svg>
            </summary>
          </details>
        </div>
      </div>

      <div className="product-box center">
        <div className="product-box__content">
          {filteredProducts.map((product, index) => (
            <div className="product" key={index}>
              <Link to="/product">
                <img className="product__img" src={product.img} alt="product" />
                <div className="product__content">
                  <Link href="product.html" className="product__heading">
                    {product.title}
                  </Link>
                  <span> Size: {product.size}</span>
                  <p className="product__text">{product.text}</p>
                  <p className="product__price">{product.price}</p>
                </div>
                <Link href="#" className="product__add">
                  Add to Cart
                </Link>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="advantages center">
        <article className="advantages__item">
          <img src={advantagesImg1} alt="truck" className="advantages__img" />
          <h3 className="advantages__heading">Free Delivery</h3>
          <p className="advantages__text">
            Worldwide delivery on all. Authoritatively morph next-generation
            innovation with extensive models.
          </p>
        </article>
        <article className="advantages__item">
          <img src={advantagesImg2} alt="percent" className="advantages__img" />
          <h3 className="advantages__heading">Sales & discounts</h3>
          <p className="advantages__text">
            Worldwide delivery on all. Authoritatively morph next-generation
            innovation with extensive models.
          </p>
        </article>
        <article className="advantages__item">
          <img src={advantagesImg3} alt="crown" className="advantages__img" />
          <h3 className="advantages__heading">Quality assurance</h3>
          <p className="advantages__text">
            Worldwide delivery on all. Authoritatively morph next-generation
            innovation with extensive models.
          </p>
        </article>
      </div>
      <Subscription />
      <Footer />
    </div>
  );
}

export default CatalogPage;
