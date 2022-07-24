import React from "react";
import Card from "../components/Card";
import AppContext from "../context";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const { onAddFavorite, onAddToCart } = React.useContext(AppContext);

  React.useEffect(() => {
    async function dataOrders() {
      try {
        const { data } = await axios.get(
          "https://62b339dda36f3a973d1e470f.mockapi.io/orders"
        );
        // console.log(data.map((obj)=> obj.product).flat())
        // console.log(data.reduce((prev, obj)=> [...prev, ...obj.product],[]))
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.product], []));
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе заказа");
        console.error(error);
      }
    }
    dataOrders();
  }, []);

  return (
    <div className="content">
      <div>
        <h1>Мои заказы</h1>
      </div>
      <div className="products">
        {(isLoading ? [...Array(8)] : orders).map((product, index) => (
          <Card
            key={index}
            favorited={true}
            loading={isLoading}
            {...product}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
