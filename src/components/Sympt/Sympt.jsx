import React from "react"
import style from "./Sympt.module.css"
import revmImg from "../../images/image 13.svg"
import ostImg from "../../images/image 9.svg"
import vosmImg from "../../images/image 10.svg"
import povmImg from "../../images/image 11.svg"
import bolmImg from "../../images/image 18.svg"

const Sympt = () => (
  <div className={style.container}>
    <h3 className={style.title}>Симптоматика</h3>
    <div className={style.list}>
      <ul className={style.smallBlock}>
        <li className={style.list_item}>
          <img className={style.list_item_img} src={revmImg} alt="Ревматизм" />
          <p className={style.list_item_decsr}>Ревматизм</p>
        </li>
        <li className={style.list_item}>
          <img className={style.list_item_img} src={ostImg} alt="Остеоартрит" />
          <p className={style.list_item_decsr}>Остеоартрит</p>
        </li>
      </ul>
      <ul className={style.bigBlock}>
        <li className={style.list_item}>
          <img className={style.list_item_img} src={vosmImg} alt="Воспаление" />
          <p className={style.list_item_decsr}>Воспаление</p>
        </li>
        <li className={style.list_item}>
          <img className={style.list_item_img} src={povmImg} alt="Повреждения" />
          <p className={style.list_item_decsr}>Повреждения мягких тканей</p>
        </li>
        <li className={style.list_item}>
          <img className={style.list_item_img} src={bolmImg} alt="revmstizm" />
          <p className={style.list_item_decsr}>Боли в суставах</p>
        </li>
      </ul>
    </div>
  </div>
)

export default Sympt