import React from "react";
import AppContext from "../context";


const Info = ({ title, image, description}) => {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className="cartEmpty">
      <img src={image} width="120px" alt="emptyCart" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button
        className="greenButton"
        onClick={() => {
          setCartOpened(false);
        }}
      >
        <img src="/img/arrow.svg" alt="Arrow" /> Вернуться назад
      </button>
    </div>
  );
};

export default Info;
