import React from "react";
import "./App.css"
import Home from "./components/home.js"
import Intro from "./components/intro.js"
import Printing from "./components/printing.js"

function App() {

  const handleScroll = (event) => {
    const pageHeight = window.innerHeight;

    if (event.deltaY > 0) {
      // Scrolling down
      const nextPageTop = Math.ceil(window.scrollY / pageHeight) * pageHeight;
      window.scrollTo({ top: nextPageTop, behavior: "smooth" });
    } else if (event.deltaY < 0) {
      // Scrolling up
      const prevPageTop = Math.floor(window.scrollY / pageHeight) * pageHeight;
      window.scrollTo({ top: prevPageTop, behavior: "smooth" });
    }
  };


  return (
    <div onWheel={handleScroll}>
      <Home className="container"></Home>
      <div className="divider"></div>
      <Intro className="container"></Intro>
      <div className="divider"></div>
      <Printing className="container"></Printing>
      <div className="divider"></div>
    </div>
  );
}

export default App;
