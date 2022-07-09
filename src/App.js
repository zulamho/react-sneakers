import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Drawer from "./components/Drawer";
import { useState } from "react";

const arr = [];

function App() {
  const [products, setProducts] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [searchProduct, setSearchProduct] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  console.log(favorites, "sddddddddd");
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
    axios
      .get("https://62b339dda36f3a973d1e470f.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = (product) => {
    setCartProducts((prev) => [...prev, product]); ///важно

    axios.post("https://62b339dda36f3a973d1e470f.mockapi.io/cart", product);
  };

  const onAddFavorite = (product) => {
    if (favorites.find((favProduct) => favProduct.id === product.id)) {
      axios.delete(
        `https://62b339dda36f3a973d1e470f.mockapi.io/favorites/${product.id}`
      );
      setFavorites((prev) => prev.filter((item) => item.id !== product.id));
    }

    axios.post(
      "https://62b339dda36f3a973d1e470f.mockapi.io/favorites",
      product
    );
    setFavorites((prev) => [...prev, product]); ///важно
  };

  const onRemoveProductCart = (id) => {
    axios.delete(`https://62b339dda36f3a973d1e470f.mockapi.io/cart/${id}`);
    setCartProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchProduct(event.target.value);
  };

  return (
    <div className="wrapper ">
      {cartOpened && (
        <Drawer
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveProductCart}
          products={cartProducts}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              searchProduct={searchProduct}
              onChangeSearchInput={onChangeSearchInput}
              setSearchProduct={setSearchProduct}
              onAddFavorite={onAddFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites products={favorites} onAddFavorite={onAddFavorite} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
