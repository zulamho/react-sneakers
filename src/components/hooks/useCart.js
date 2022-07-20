import React from "react";
import AppContext from "../../context";

export const useCart = () => {
  const { cartProducts, setCartProducts } = React.useContext(AppContext);
  const totalPrice = cartProducts.reduce((sum, product)=> product.price + sum, 0)

  return {cartProducts  , setCartProducts , totalPrice}
};
