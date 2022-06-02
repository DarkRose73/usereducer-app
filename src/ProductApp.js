import React, { useReducer } from "react";
import productReducer, { initialProductState } from "./reducers/productReducer";
import TYPES from "./types";

const ProductApp = () => {
  const [productState, dispatch] = useReducer(
    productReducer,
    initialProductState
  );
  const { products, cart, activeProduct } = productState;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}
            <button
              onClick={() =>
                dispatch({
                  type: TYPES.PRODUCT_SHOW,
                  payload: product,
                })
              }
            >
              Show
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: TYPES.PRODUCT_ADD_TO_CART,
                  payload: product,
                })
              }
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.title} - quantity: {product.quantity}
            <button
              onClick={() =>
                dispatch({
                  type: TYPES.PRODUCT_REMOVE_ONE_FROM_CART,
                  payload: product.id,
                })
              }
            >
              Remove one
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: TYPES.PRODUCT_REMOVE_FROM_CART,
                  payload: product.id,
                })
              }
            >
              Remove all
            </button>
          </li>
        ))}
      </ul>
      <h2>Preview</h2>
      <p>{activeProduct.title}</p>
    </div>
  );
};

export default ProductApp;
