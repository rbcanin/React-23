import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";

import { useState, useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

const Home = () => {
  const { contextValue } = useContext(SomeContext);
  return (
    <div>
      <HookUseState />;
      <HookUseReducer />;
      <HookUseEffect />;<h2>Use Context</h2>
      <p>Valor do Context: {contextValue}</p>
    </div>
  );
};

export default Home;
