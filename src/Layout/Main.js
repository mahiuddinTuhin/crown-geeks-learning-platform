import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { MainContext } from "../context/UserContex";
import { Header } from "../shared/Header";

const Main = () => {
  const { darkMode } = useContext(MainContext);
  return (
    <div className={`${darkMode ? "darkBack" : "lightBack"}`}>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
