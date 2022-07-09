import { Link } from "react-router-dom";
function Header(props) {
  console.log(props);
  return (
    <header>
      <div className="headerLeft">
        <Link to="/">
          <img width={40} height={40} src="/img/logo.png" />
        </Link>

        <div className="infoNameShop">
          <h3>React sneakers</h3>
          <p>Магазин лучших кроссовок</p>
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

          <span>1205 руб.</span>
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
