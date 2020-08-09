import React from "react"
import style from './MoreInfo.module.css'
import backImg from "../../images/Neck_POP_40yr_Old_Asian_Female_02_075_1536x960 1.png"

const MoreInfo = () => (
  <div className={style.container}>
    <img className={style.backImg} src={backImg} alt="back" />
    <div className={style.info}>
      <h2 className={style.info_descr_title}>Найти подходящее лекарственное средство</h2>
      <p className={style.info_decsr}>Узнайте, как продукты Вольтарен обеспечивают обезболивание, ориентируясь на его источник, чтобы вы могли вновь открыть для себя радость движения.</p>
      <button className={style.info_decsr_btn}>узнать больше</button>
    </div>
  </div>
)

export default MoreInfo