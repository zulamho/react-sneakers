import Card from "../components/Card";
function Home({
  products,
  cartProducts,
  searchProduct,
  setSearchProduct,
  onAddFavorite,
  onAddToCart,
  onChangeSearchInput,
  isLoading,
}) {
  const renderProducts = () => {
    const filtredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchProduct.toLowerCase())
    );
    return (isLoading ? [...Array(10)] : filtredProducts).map(
      (product, index) => (
        <Card
          key={index}
          onClickFavorite={(product) => onAddFavorite(product)}
          onPlus={(product) => onAddToCart(product)}
          added={cartProducts.some(
            (item) => Number(item.id) === Number(product.id)
          )}
          loading={isLoading}
          {...product}
        />
      )
    );
  };
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
      <div className="products">{renderProducts()}</div>
    </div>
  );
}

export default Home;
