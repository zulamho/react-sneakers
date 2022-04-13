function Card() {
  return (
    <div className="card">
      <img width={200} height={180} src="/img/sneakers/1.jpg" alt="sneakers" />
      <h5>Кроссовки ECCO BIOM 2.0</h5>
      <div className="cardButtom">
        <div className="price">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <img src="/img/add-product-cart.png" width={11} height={11} />
        </button>
      </div>
    </div>
  );
}

export default Card;
