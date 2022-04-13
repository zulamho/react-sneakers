function Drawer() {
  return (
    <div className="drawer">
      <h2>
        Корзина{" "}
        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
      </h2>
      <div className="items">
        <div className="cartItem">
          <div
            style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
            className="cartItemImg"
          ></div>
          <div>
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <b>12 999 руб.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
        </div>
        <div className="cartItem">
          <div
            style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
            className="cartItemImg"
          ></div>
          <div>
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <b>12 999 руб.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
        </div>
      </div>
      <ul className="cartTotalBlock">
        <li>
          <span>Итого:</span>
          <div></div>
          <b>21 498 руб.</b>
        </li>
        <li>
          <span>Налог 5%:</span>
          <div></div>
          <b>1074 руб.</b>
        </li>
      </ul>
      <button className="greenButton">
        Оформить заказ <img width={14} height={12} src="/img/arrow.svg" />
      </button>
    </div>
  );
}
export default Drawer;
