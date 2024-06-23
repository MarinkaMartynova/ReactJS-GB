import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct, toggleAvailability } from "../actions/productActions";
import EditProduct from "./EditProduct";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Список продуктов</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Цена: {product.price.toFixed(2)} руб</p>
            <p>
              Доступность:
              <input
                type="checkbox"
                checked={product.available}
                onChange={() => dispatch(toggleAvailability(product.id))}
              />
            </p>
            <button onClick={() => dispatch(removeProduct(product.id))}>
              Удалить
            </button>
            <EditProduct product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
