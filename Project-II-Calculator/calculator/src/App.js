import React from 'react';
import './App.css';

import CalcDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div className="calculator-container">
      <CalcDisplay />
      <div className="button-container">
        <div className="input-buttons">
          <ActionButton buttonStyle="action-button" text="clear"/>
          <div className="number-buttons">
            <NumberButton buttonStyle="number-button" text="7"/>
            <NumberButton buttonStyle="number-button" text="8"/>
            <NumberButton buttonStyle="number-button" text="9"/>
            <NumberButton buttonStyle="number-button" text="4"/>
            <NumberButton buttonStyle="number-button" text="5"/>
            <NumberButton buttonStyle="number-button" text="6"/>
            <NumberButton buttonStyle="number-button" text="1"/>
            <NumberButton buttonStyle="number-button" text="2"/>
            <NumberButton buttonStyle="number-button" text="3"/>
          </div>
          <ActionButton buttonStyle="action-button" text="0"/>
        </div>
        <div className="operators-buttons">
          <NumberButton buttonStyle="operator-button" text="/" />
          <NumberButton buttonStyle="operator-button" text="x"/>
          <NumberButton buttonStyle="operator-button" text="-"/>
          <NumberButton buttonStyle="operator-button" text="+"/>
          <NumberButton buttonStyle="operator-button" text="="/>
        </div>
      </div>
    </div>
  );
};

export default App;
