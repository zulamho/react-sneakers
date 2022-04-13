import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper ">
      <div  className="overlay">
        <Drawer />
      </div>
      <Header />
      <div className="content">
        <div>
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img
              width={16}
              z
              height={16}
              src="/img/search-icon.png"
              alt="Search"
            />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="products">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
