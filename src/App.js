import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skill/Skills";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
      </main>
    </>
  );
};

export default App;
