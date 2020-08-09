import React from "react";
import Header from "./components/Header/Header";
import Sympt from "./components/Sympt/Sympt";
import MoreInfo from "./components/MoreInfo/MoreInfo";
import Quests from "./components/Quests/Quests";

import s from "./App.module.css";

const App = () => {
  return (
    <div className={s.mainContainer}>
      <Header />
      <Sympt />
      <MoreInfo />
      <Quests />
    </div>
  );
};

export default App;
