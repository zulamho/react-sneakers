import React from "react";
import styles from "./Card.module.scss";

function Card({id, imgUrl, title, price, onClickFavorite, onPlus , favorited = false }) {
  const [isFavorite , setIsFaforite] = React.useState(favorited)
  const [isAded, setIsAded] = React.useState(false);

  

  const onClickPlus = () => {
    onPlus({ imgUrl, title, price })
    setIsAded(!isAded);
  };
  const onClickLike = () => {
    onClickFavorite({id,imgUrl, title, price})
    setIsFaforite(!isFavorite);
  };

  React.useEffect(() => {
    console.log("изменилось");
  }, [isAded]);

  return (
    <div className={styles.card}>
      <div className={styles.favorite} >
        <img
          onClick={onClickLike}
          src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg" }
          alt="Unliked"
        />
      </div>
      <img width={200} height={180} src={imgUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className={styles.cardButtom}>
        <div className="price">
          <span>Цена:</span>
          <b> {price}</b>
        </div>

        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAded ? "/img/btn-checked.svg" : "/img/add-product-cart.svg"}
        />
      </div>
    </div>
  );
}

export default Card;
