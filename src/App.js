import React, { Component } from "react";
import "./App.css";
// components
import FlipCard from "./components/FlipCard/FlipCard";

// data
import { stockData } from "./data/stockData";
class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='flip_card_container'>
          {stockData.map((card) => {
            return <FlipCard front={card.front} back={card.back} title={card.title} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
