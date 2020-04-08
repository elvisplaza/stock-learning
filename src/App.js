import React, { Component } from "react";
import "./App.css";

// components

import FlipCard from "./components/FlipCard/FlipCard";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <FlipCard />
      </div>
    );
  }
}

export default App;
