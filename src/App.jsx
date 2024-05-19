import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Top from "./components/Top";
import Chart from "./components/Chart";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="outer-container">
      <div className="inner-container">
        <Top />
        <Chart/>
      </div>
      <Footer/>
    </main>
  );
}

export default App;
