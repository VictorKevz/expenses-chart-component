import React from "react";
import logo from "../assets/images/logo.svg";
import "./css/top.css"
function Top() {
  return (
    <div className="top-container">
      <h1>
        <span>My balance</span>$921.48
      </h1>
      <img src={logo} alt="logo"/>
    </div>
  );
}
export default Top;
