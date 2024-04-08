import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";
import { useState, useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

const Home = () => {
  return (
    <div>
      <HookUseState />;
      <HookUseReducer />;
      <HookUseEffect />;
    </div>
  );
};

export default Home;
