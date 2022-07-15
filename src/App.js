import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Drawer from "./components/Drawer";
import AppContext from "./context";

function App() {
  const [products, setProducts] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [searchProduct, setSearchProduct] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const cartResponse = await axios.get(
        "https://62b339dda36f3a973d1e470f.mockapi.io/cart"
      );

      const favoritesResponse = await axios.get(
        "https://62b339dda36f3a973d1e470f.mockapi.io/favorites"
      );
      const productsResponse = await axios.get(
        "https://62b339dda36f3a973d1e470f.mockapi.io/products"
      );
      setIsLoading(false);

      setCartProducts(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setProducts(productsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = (product) => {
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
      if (favorites.find((favProduct) => Number(favProduct.id) == Number(product.id))) {
        axios.delete(
          `https://62b339dda36f3a973d1e470f.mockapi.io/favorites/${product.id}`
        );
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(product.id)));
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

  const isProductAdded = (id) =>{
    return cartProducts.some(
      (item) => Number(item.id) === Number(id))
  } 

  return (
    <AppContext.Provider value={{ products, favorites, cartProducts,setCartProducts,isProductAdded , setCartOpened}}>
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
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites onAddFavorite={onAddFavorite} />
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
