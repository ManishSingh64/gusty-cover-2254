import React from "react";
import { Route, Routes } from "react-router-dom";
import { Crm } from "../../Pages/CRM/Crm";
import { Home } from "./Home";
import NavBar from "./Navbar";

const Dashborad = () => {
  return (
    <div>
      <NavBar />
      <Home/>
    </div>
  );
};

export default Dashborad;
