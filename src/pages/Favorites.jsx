import Card from "../components/Card";
function Favorites({ products , onAddFavorite }) {
  return (
    <div className="content">
      <div>
        <h1>Мои закладки</h1>
      </div>
      <div className="products">
        {products.map((product, index) => (
          <Card
            key={index}
            title={product.title}
            price={product.price}
            imgUrl={product.imgUrl}
            favorited={true}
            onFavorite={onAddFavorite}
             onClickFavorite={(product) => onAddFavorite(product)}
            // onPlus={(product) => onAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
