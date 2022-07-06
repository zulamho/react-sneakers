import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useState } from "react";

const arr = [];

function App() {
  const [products, setProducts] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [searchProduct, setSearchProduct] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://62b339dda36f3a973d1e470f.mockapi.io/products")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setProducts(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartProducts((prev) => [...prev, obj]); ///важно
  };

  const onChangeSearchInput = (event) => {
    console.log(event.target.value); //
    setSearchProduct(event.target.value);
  };

  return (
    <div className="wrapper ">
      {cartOpened && (
        <Drawer onClose={() => setCartOpened(false)} products={cartProducts} />
      )}

      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div>
          <h1>
            {searchProduct
              ? `Поиск по запросу: "${searchProduct}"`
              : "Все кроссовки"}
          </h1>
          <div className="search-block">
            <img
              width={16}
              height={16}
              src="/img/search-icon.png"
              alt="Search"
            />
            <input
              onChange={onChangeSearchInput}
              value={searchProduct}
              placeholder="Поиск..."
            />

            {searchProduct && (
              <img
                className="clear"
                onClick={() => setSearchProduct("")}
                src="/img/btn-remove.svg"
                alt="clear"
              />
            )}
          </div>
        </div>
        <div className="products">
          {products.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              price={product.price}
              imgUrl={product.imgUrl}
              onClickFavorite={() => alert("ss")}
              onPlus={(product) => onAddToCart(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
