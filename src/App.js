import React from "react";
import axios from "axios";
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
    axios
      .get("https://62b339dda36f3a973d1e470f.mockapi.io/products")
      .then((res) => {
        setProducts(res.data);
      });

    axios
      .get("https://62b339dda36f3a973d1e470f.mockapi.io/cart")
      .then((res) => {
        setCartProducts(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartProducts((prev) => [...prev, obj]); ///важно

    axios.post("https://62b339dda36f3a973d1e470f.mockapi.io/cart", obj);
  };

  const onRemoveProductCart = (id) => {
    console.log(id)
    // axios.delete(`https://62b339dda36f3a973d1e470f.mockapi.io/cart/${id}`);
    setCartProducts((prev) => prev.filter(product => product.id !== id ));
  };

  const onChangeSearchInput = (event) => {
    console.log(event.target.value); //
    setSearchProduct(event.target.value);
  };

  return (
    <div className="wrapper ">
      {cartOpened && (
        <Drawer onClose={() => setCartOpened(false)} onRemove={onRemoveProductCart} products={cartProducts} />
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
          {products
            .filter((product) =>
              product.title.toLowerCase().includes(searchProduct.toLowerCase())
            )
            .map((product, index) => (
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
