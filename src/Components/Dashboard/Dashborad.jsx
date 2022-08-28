import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Crm } from "../../Pages/CRM/Crm";
import { Home } from "./Home";
import NavBar from "./Navbar";
import Styles from "./Dashboard.module.css";

const Dashborad = () => {
  const setLoggedIn = localStorage.getItem("setLoggedIn");
  console.log("inDasboard", setLoggedIn);
  if (!setLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div style={{ height: "150vh" }} className={Styles.HomeBackGround}>
      <NavBar />
      <Home />
    </div>
  );
};

export default Dashborad;
