function Header(props) {
  console.log(props)
  return (
    <header>
      <div className="headerLeft">
        <img width={40} height={40} src="/img/logo.png" />
        <div className="infoNameShop">
          <h3>React sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="headerRigth headerBuutoms">
        <li onClick={props.onClickCart} >
          <img
            width={18}
            height={18}
            color="red"
            src="/img/shopping-cart.png"
          />

          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} color="red" src="/img/icon-user.png" />
        </li>
      </ul>
    </header>
  );
}
export default Header;
