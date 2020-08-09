import React from "react"
import mainImg from "../../images/536270-PJIICW-380 1.png"
import style from "./Header.module.css"
import layer from "../../images/Layer 1.png"
import forte from "../../images/vorte_long.png"

const Header = () => (
  <div className={style.container}>
    <div className={style.imgContainer}>
      <img className={style.imgMain} src={mainImg} alt="main" />
      <img className={style.forte} src={forte} alt="forte" />
      <img className={style.layer} src={layer} alt="layer" />
    </div>
    <div className={style.descrContainer}>
      <h2 className={style.descr}>Помогает облегчить острую боль уже через час</h2>
      <button className={style.descr_btn}>купить</button>
    </div>
  </div>
)

export default Header