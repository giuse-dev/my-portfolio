import React from 'react';
import './App.css';

import TopComponent from "./components/TopComponent"
import BottomComponent from "./components/BottomComponent"
import MiddleComponent from "./components/MiddleComponent"
import FixedComponent from "./components/FixedComponent"


function App() {

  return (
    <div className="App">
      <FixedComponent />
      <TopComponent />
      <MiddleComponent />
      <BottomComponent />
    </div>
  );
}

export default App;
