import React from "react";
import HeroCard from "./components/HeroCard";
import heroes from "./data/heroes";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Супергерои</h1>
      <div className="heroes-list">
        {heroes.map((hero) => (
          <HeroCard key={hero.name} hero={hero} />
        ))}
      </div>
    </div>
  );
};

export default App;
