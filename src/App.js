import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Drawer from "./components/Drawer";
import AppContext from "./context";
import Orders from "./pages/Orders";

function App() {
  const [products, setProducts] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [searchProduct, setSearchProduct] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        //         const [cartResponse,favoritesResponse,productsResponse] = await Promise.all([axios.get(
        //           "https://62b339dda36f3a973d1e470f.mockapi.io/cart"
        //         ),
        // axios.get(
        //           "https://62b339dda36f3a973d1e470f.mockapi.io/favorites"
        //         ),
        // axios.get(
        //           "https://62b339dda36f3a973d1e470f.mockapi.io/products"
        //         )])

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
      } catch (error) {
        alert("Ошибка при запросе данных...");
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (product) => {
    try {
      const findProduct = cartProducts.find(
        (item) => Number(item.parentId) === Number(product.id)
      );
      if (findProduct) {
        setCartProducts((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(product.id))
        );
        await axios.delete(
          `https://62b339dda36f3a973d1e470f.mockapi.io/cart/${findProduct.id}`
        );
      } else {
        
        setCartProducts((prev) => [...prev, product]); ///важно
        const { data } = await await axios.post(
          "https://62b339dda36f3a973d1e470f.mockapi.io/cart",
          product
        );
        setCartProducts((prev) => prev.map((item)=>{
          if(item.parentId === data.parentId){
            return{
              ...item,
              id: data.id
            }

          }
          return item
        })); ///важно
      }
    } catch (error) {
      alert("Не удалось добавить товар в корзиину");
      console.error(error);
    }
  };

  const onAddFavorite = async (product) => {
    try {
      if (
        favorites.find(
          (favProduct) => Number(favProduct.id) == Number(product.id)
        )
      ) {
        await axios.delete(
          `https://62b339dda36f3a973d1e470f.mockapi.io/favorites/${product.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(product.id))
        );
      } else {
        const { data } = await axios.post(
          "https://62b339dda36f3a973d1e470f.mockapi.io/favorites",
          product
        );
        setFavorites((prev) => [...prev, data]); ///важно
      }
    } catch (error) {
      alert("Не удалось добавить в закладки");
      console.error(error);
    }
  };

  const onRemoveProductCart = (id) => {
    try {
      axios.delete(`https://62b339dda36f3a973d1e470f.mockapi.io/cart/${id}`);
      setCartProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (error) {
      alert("Не удалось отправить запрос на удаление товара.");
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchProduct(event.target.value);
  };
  const isProductFavorited= (id) => {
    return favorites.some((item) => Number(item.id) === Number(id));
  };

  const isProductAdded = (id) => {
    return cartProducts.some((item) => Number(item.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        products,
        favorites,
        cartProducts,
        setCartProducts,
        isProductAdded,
        isProductFavorited,
        setCartOpened,
        onAddFavorite,
        onAddToCart,
      }}
    >
      <div className="wrapper ">
        <Drawer
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveProductCart}
          products={cartProducts}
          opened={cartOpened}
        />
        {/* {cartOpened && (
          <Drawer
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveProductCart}
            products={cartProducts}
          />
        )} */}

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
            element={<Favorites onAddFavorite={onAddFavorite} />}
          />
          <Route
            path="/Orders"
            element={<Orders onAddFavorite={onAddFavorite} />}
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
