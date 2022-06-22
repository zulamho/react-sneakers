import React from "react"
import styles from "./Card.module.scss"



function Card(props) {
  const [isAded , setIsAded] = React.useState(false)
  const [isLike , setIsLike] = React.useState(false)
  
  const onClickPlus =()=>{
    setIsAded(!isAded)
  }
  const onClickLike =()=>{
    setIsLike(!isLike)
  }

  React.useEffect(()=>{
console.log("изменилось")
  }, [isAded])


  return (
    <div className={styles.card}>
    <div className={styles.favorite} > 
    <img onClick={onClickLike} src={isLike ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="Unliked" />
    </div>
      <img width={200} height={180} src={props.imgUrl} alt="sneakers" />
      <h5>{props.title}</h5>
      <div className={styles.cardButtom}>
        <div className="price">
          <span>Цена:</span>
          <b> {props.price}</b>
        </div>
      
          <img className={styles.plus} onClick={onClickPlus} src={isAded ? "/img/btn-checked.svg" : "/img/add-product-cart.svg"}  />

      </div>
    </div>
  );
}

export default Card;
