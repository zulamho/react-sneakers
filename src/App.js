import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useState } from "react";

const arr = [];

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="wrapper ">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}

      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div>
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img
              width={16}
              height={16}
              src="/img/search-icon.png"
              alt="Search"
            />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="products">
          {arr.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              onClickFavorite={() => alert("ss")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
