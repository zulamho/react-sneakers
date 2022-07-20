import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../context";
function Header(props) {
  const { cartProducts } = React.useContext(AppContext);

  const totalPrice = cartProducts.reduce(
    (sum, product) => product.price + sum,
    0
  );

  return (
    <header>
      <div className="headerLeft">
        <Link to="/">
          <img width={40} height={40} src="/img/logo.png" />
        </Link>

        <div className="infoNameShop">
          <h3>Sneaker store</h3>
          <p>SHOP THE BEST SNEAKERS</p>
        </div>
      </div>
      <ul className="headerRigth headerBuutoms">
        <li onClick={props.onClickCart}>
          <img
            width={18}
            height={18}
            color="red"
            src="/img/shopping-cart.png"
            alt="Корзина"
          />

          <span>{totalPrice} руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              width={18}
              height={18}
              color="red"
              src="/img/heart.svg"
              alt="Закладки"
            />
          </Link>
        </li>
        <li>
          <img
            width={18}
            height={18}
            color="red"
            src="/img/icon-user.png"
            alt="Пользователь"
          />
        </li>
      </ul>
    </header>
  );
}
export default Header;
