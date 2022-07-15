import React from "react";
import Card from "../components/Card";
import AppContext from "../context";


function Favorites({  onAddFavorite }) {
const {favorites} = React.useContext(AppContext)

  return (
    <div className="content">
      <div>
        <h1>Мои закладки</h1>
      </div>
      <div className="products">
        {favorites.map((product, index) => (
          <Card
            key={index}
            favorited={true}
            {...product}
            onClickFavorite={(product) => onAddFavorite(product)}
            // onPlus={(product) => onAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
