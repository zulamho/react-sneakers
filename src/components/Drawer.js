function Drawer({ onClose, onRemove, products = [] }) {
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
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className="greenButton">
                Оформить заказ <img  src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty">
            <img src="/img/empty-cart.svg" alt="emptyCart" />
            <h2>Корзина пустая</h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
            <button className="greenButton">
               <img src="/img/arrow.svg" alt="Arrow" /> Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Drawer;
