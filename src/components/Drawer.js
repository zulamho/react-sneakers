function Drawer({ onClose, products = [] }) {
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
        <div className="items">
          {products.map((product) => (
            <div className="cartItem">
              <div
                style={{ backgroundImage: `url(${product.imgUrl})` }}
                className="cartItemImg"
              ></div>
              <div>
                <p>{product.title}</p>
                <b>{product.price}</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          ))}
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
    </div>
  );
}
export default Drawer;
