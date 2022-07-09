import Card from "../components/Card";
function Home({
  products,
  searchProduct,
  setSearchProduct,
  onAddFavorite,
  onAddToCart,
  onChangeSearchInput,
}) {
  return (
    <div className="content">
      <div>
        <h1>
          {searchProduct
            ? `Поиск по запросу: "${searchProduct}"`
            : "Все кроссовки"}
        </h1>
        <div className="search-block">
          <img width={16} height={16} src="/img/search-icon.png" alt="Search" />
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
              {...product}
              //id={product.id}
            //   title={product.title}
            //   price={product.price}
            //   imgUrl={product.imgUrl}
              onClickFavorite={(product) => onAddFavorite(product)}
              onPlus={(product) => onAddToCart(product)}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
