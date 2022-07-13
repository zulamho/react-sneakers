import React from "react";
import ContentLoader from "react-content-loader"
import styles from "./Card.module.scss";

function Card({
  id,
  imgUrl,
  title,
  price,
  onClickFavorite,
  onPlus,
  favorited = false,
  added = false,
  loading = false
}) {
  const [isFavorite, setIsFaforite] = React.useState(favorited);
  const [isAded, setIsAded] = React.useState(added);

  const onClickPlus = () => {
    onPlus({ id, imgUrl, title, price });
    setIsAded(!isAded);
  };
  const onClickLike = () => {
    onClickFavorite({ id, imgUrl, title, price });
    setIsFaforite(!isFavorite);
  };

  React.useEffect(() => {
    console.log("изменилось");
  }, [isAded]);

  return (
    <div className={styles.card}>
      {
        loading ?       <ContentLoader
        speed={2}
        width={350}
        height={300}
        viewBox="0 0 350 310"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
     
      >
        <rect x="-2" y="15" rx="10" ry="10" width="210" height="170" />
        <rect x="-2" y="205" rx="5" ry="5" width="210" height="20" />
        <rect x="-2" y="232" rx="5" ry="5" width="160" height="20" />
        <rect x="-2" y="278" rx="5" ry="5" width="110" height="25" />
        <rect x="174" y="274" rx="10" ry="10" width="32" height="32" />
      </ContentLoader> : <>
      <div className={styles.favorite}>
        <img
          onClick={onClickLike}
          src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
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
      </div></>
      }
   
    </div>
  );
}

export default Card;
