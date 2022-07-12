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

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://62b339dda36f3a973d1e470f.mockapi.io/cart"
      );

      const favoritesResponse = await axios.get(
        "https://62b339dda36f3a973d1e470f.mockapi.io/favorites"
      );
      const productsResponse = await axios.get(
        "https://62b339dda36f3a973d1e470f.mockapi.io/products"
      );
      setCartProducts(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setProducts(productsResponse.data);
    }

    fetchData()
  }, []);

  const onAddToCart = (product) => {
    console.log(product, "d");
    if (cartProducts.find((item) => Number(item.id) === Number(product.id))) {
      axios.delete(
        `https://62b339dda36f3a973d1e470f.mockapi.io/cart/${product.id}`
      );
      setCartProducts((prev) =>
        prev.filter((item) => Number(item.id) !== Number(product.id))
      );
    } else {
      axios.post("https://62b339dda36f3a973d1e470f.mockapi.io/cart", product);
      setCartProducts((prev) => [...prev, product]); ///важно
    }
  };

  const onAddFavorite = async (product) => {
    try {
      if (favorites.find((favProduct) => favProduct.id == product.id)) {
        axios.delete(
          `https://62b339dda36f3a973d1e470f.mockapi.io/favorites/${product.id}`
        );
        setFavorites((prev) => prev.filter((item) => item.id !== product.id));
      } else {
        const { data } = await axios.post(
          "https://62b339dda36f3a973d1e470f.mockapi.io/favorites",
          product
        );
        setFavorites((prev) => [...prev, data]); ///важно
      }
    } catch (error) {
      alert("Не удалось добавить в закладки");
    }
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
              cartProducts={cartProducts}
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
