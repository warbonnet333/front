import React, { Component } from "react"
import style from "./Quests.module.css"
import elips from "../../images/Ellipse 45.svg"
import vector from "../../images/Vector.svg"
import quest from "../../images/_.svg"
import { CSSTransition } from "react-transition-group"
import slide from "../../transitions/slide.module.css"

class Quests extends Component {

  state = {
    FirstQuest: false,
    SecondQuest: false,
    ThirdQuest: false,
    firstRef: React.createRef(),
    secondRef: React.createRef(),
    thirdRef: React.createRef()
  };

  toggleQuest = (event) => {
    const { id } = event.currentTarget
    if (id === "FirstQuest") {
      this.setState((prevState) => ({ FirstQuest: !prevState.FirstQuest }))
    } else if (id === "SecondQuest") {
      this.setState((prevState) => ({ SecondQuest: !prevState.SecondQuest }))
    } else {
      this.setState((prevState) => ({ ThirdQuest: !prevState.ThirdQuest }))
    }
  }


  render() {
    const { FirstQuest, SecondQuest, ThirdQuest, firstRef, secondRef, thirdRef } = this.state
    return (
      <div className={style.container}>
        <div className={style.title_container}>
          <h2 className={style.title}>Вопросы и ответы</h2>
          <div className={style.quest_logo}>
            <img className={style.logo_elips} src={elips} alt="elips" />
            <img className={style.logo_que} src={quest} alt="quest" />
          </div>
        </div>
        <ul className={style.quests_list}>
          <li className={style.quests_list_item} >
            <div className={style.quests_list_item_title} ref={firstRef} id="FirstQuest" onClick={(event) => this.toggleQuest(event)}>
              <img className={FirstQuest ? style.vector : style.vector_open} src={vector} alt="vector" />
              <p className={style.quest}>Что такое Вольтарен Эмульгель? </p>
            </div>
            <CSSTransition in={FirstQuest} timeout={250} classNames={slide} unmountOnExit>
              <p className={style.quest_text}>Вольтарен Эмульгель – это лекарственный препарат, содержащий в качестве активного вещества диклофенака диэтиламин (нестероидное противовоспалительное средство). <br /> <br /> Диклофенака диэтиламин всасывается через кожу и облегчает боль и воспаление в месте его возникновения. Этим он отличается от разогревающих и охлаждающих мазей, активные вещества которых стимулируют нервы в коже, в результате чего вы чувствуете тепло или холод. Вольтарен Эмульгель обладает нежирной текстурой и слабым запахом.</p>
            </CSSTransition>
          </li>
          <li className={style.quests_list_item} >
            <div className={style.quests_list_item_title} ref={secondRef} id="SecondQuest" onClick={(event) => this.toggleQuest(event)}>
              <img className={SecondQuest ? style.vector : style.vector_open} src={vector} alt="vector" />
              <p className={style.quest}>Что такое Вольтарен Эмульгель? </p>
            </div>
            <CSSTransition in={SecondQuest} timeout={250} classNames={slide} unmountOnExit>
              <p className={style.quest_text}>Вольтарен Эмульгель – это лекарственный препарат, содержащий в качестве активного вещества диклофенака диэтиламин (нестероидное противовоспалительное средство). <br /> <br /> Диклофенака диэтиламин всасывается через кожу и облегчает боль и воспаление в месте его возникновения. Этим он отличается от разогревающих и охлаждающих мазей, активные вещества которых стимулируют нервы в коже, в результате чего вы чувствуете тепло или холод. Вольтарен Эмульгель обладает нежирной текстурой и слабым запахом.</p>
            </CSSTransition>
          </li>
          <li className={style.quests_list_item} >
            <div className={style.quests_list_item_title} ref={thirdRef} id="ThirdQuest" onClick={(event) => this.toggleQuest(event)}>
              <img className={ThirdQuest ? style.vector : style.vector_open} src={vector} alt="vector" />
              <p className={style.quest}>Что такое Вольтарен Эмульгель? </p>
            </div>
            <CSSTransition in={ThirdQuest} timeout={250} classNames={slide} unmountOnExit>
              <p className={style.quest_text}>Вольтарен Эмульгель – это лекарственный препарат, содержащий в качестве активного вещества диклофенака диэтиламин (нестероидное противовоспалительное средство). <br /> <br /> Диклофенака диэтиламин всасывается через кожу и облегчает боль и воспаление в месте его возникновения. Этим он отличается от разогревающих и охлаждающих мазей, активные вещества которых стимулируют нервы в коже, в результате чего вы чувствуете тепло или холод. Вольтарен Эмульгель обладает нежирной текстурой и слабым запахом.</p>
            </CSSTransition>
          </li>
        </ul>
      </div>
    )
  }
}

export default Quests