import React from "react";
import axios from "axios";
import Info from "./Info";
import AppContext from "../context";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, products = [] }) {
  const { cartProducts, setCartProducts } = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const totalPrice = cartProducts.reduce((sum, product)=> product.price + sum, 0)

  const onClickOreder = async () => {
    try {
      setIsLoading(true); 
      const { data } = await axios.post(
        "https://62b339dda36f3a973d1e470f.mockapi.io/orders",
        { product: cartProducts }
      );

      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartProducts([]);

      for (let i = 0; i < cartProducts.length; i++) {
        const item = cartProducts[i];
        await axios.delete(
          "https://62b339dda36f3a973d1e470f.mockapi.io/cart/" + item.id
        );
        delay(1000);
      }
    } catch (error) {
      alert("Не удалось отправить заказ");
    }
    setIsLoading(false);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина{" "}
          <img
            onClick={onClose}
            className="removeBtn"
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>
        {products.length > 0 ? (
          <div className="items">
            {products.map((product) => (
              <div key={product.id} className="cartItem">
                <div
                  style={{ backgroundImage: `url(${product.imgUrl})` }}
                  className="cartItemImg"
                ></div>
                <div>
                  <p>{product.title}</p>
                  <b>{product.price}</b>
                </div>
                <img
                  onClick={() => onRemove(product.id)}
                  className="removeBtn"
                  src="/img/btn-remove.svg"
                  alt="Remove"
                />
              </div>
            ))}
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{(totalPrice / 100)*5} руб.</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                className="greenButton"
                onClick={onClickOreder}
              >
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"
            }
            image={
              isOrderComplete
                ? "/img/complete-order.svg"
                : "/img/empty-cart.svg"
            }
          />
        )}
      </div>
    </div>
  );
}
export default Drawer;
