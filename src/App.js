import React from 'react';
import './App.css';

import BottomComponent from "./components/BottomComponent"
import MiddleComponent from "./components/MiddleComponent"
import FixedComponent from "./components/FixedComponent"
import LateralComponent from "./components/LateralComponent"



function App() {

  return (
    <div className="App">
      <FixedComponent />
      <LateralComponent />
      <MiddleComponent />
      <BottomComponent />
    </div>
  );
}

export default App;
