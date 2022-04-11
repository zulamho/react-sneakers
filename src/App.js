function App() {
  return (
    <div className="wrapper ">
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" />
          <div className="infoNameShop">
            <h3>React sneakers</h3>
            <p >Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRigth headerBuutoms">
          <li>
            <img
              width={18}
              height={18}
              color="red"
              src="/img/shopping-cart.png"
            />

            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} color="red" src="/img/icon-user.png" />
          </li>
        </ul>
      </header>
      <div className="content">
      <div>
      <h1>Все кроссовки</h1>
      <div className="search-block">
        <img width={16} height={16} src="/img/search-icon.png" alt="Search" />
        <input placeholder="Поиск..." />
  
        </div>
      </div>
        <div className="products">
          <div className="card">
            <img
              width={200}
              height={180}
              src="/img/sneakers/5.jpg"
              alt="sneakers"
            />
            <h5>Кроссовки ECCO BIOM 2.0 M</h5>
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

          <div className="card">
            <img
              width={200}
              height={180}
              src="/img/sneakers/2.jpg"
              alt="sneakers"
            />
            <h5>Кроссовки ECCO BIOM 2.0 M</h5>
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

          <div className="card">
            <img
              width={200}
              height={180}
              src="/img/sneakers/3.jpg"
              alt="sneakers"
            />
            <h5>Кроссовки ECCO BIOM 2.0 M</h5>
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

          <div className="card">
            <img
              width={200}
              height={180}
              src="/img/sneakers/1.jpg"
              alt="sneakers"
            />
            <h5>Кроссовки ECCO BIOM 2.0 M</h5>
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
        </div>
      </div>
    </div>
  );
}

export default App;
