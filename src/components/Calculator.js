import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [calcData, setCalcData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calcData, buttonName);
    setCalcData(newData);
  };

  return (
    <div className="calculator">
      <input
        className="inputContainer"
        type="text"
        id="myInput"
        name="name"
        pattern="[0-9+\-*/(). ]+"
        value={calcData.next || calcData.total || ''}
        onChange={() => {}}
      />
      <div className="buttonContainer">
        <button className="calculatorButton mathButton" type="button" onClick={() => handleButtonClick('AC')}>AC</button>
        <button className="calculatorButton mathButton" type="button" onClick={() => handleButtonClick('+/-')}>+/-</button>
        <button className="calculatorButton mathButton" type="button" onClick={() => handleButtonClick('%')}>%</button>
        <button className="mathButton calculatorButton operationButton" type="button" onClick={() => handleButtonClick('÷')}>
          ÷
        </button>
        <button className="calculatorButton mathButton" type="button" onClick={() => handleButtonClick('7')}>7</button>
        <button className="calculatorButton mathButton" type="button" onClick={() => handleButtonClick('8')}>8</button>
        <button className="calculatorButton mathButton" type="button" onClick={() => handleButtonClick('9')}>9</button>
        <button className="mathButton calculatorButton operationButton" type="button" onClick={() => handleButtonClick('x')}>
          x
        </button>
        <button className="calculatorButton mathButton" type="button" onClick={() => handleButtonClick('4')}>4</button>
        <button className="calculatorButton mathButton" type="button" onClick={() => handleButtonClick('5')}>5</button>
        <button className="calculatorButton mathButton" type="button" onClick={() => handleButtonClick('6')}>6</button>
        <button className="mathButton calculatorButton operationButton" type="button" onClick={() => handleButtonClick('-')}>
          -
        </button>
        <button className="calculatorButton mathButton" type="button" onClick={() => handleButtonClick('1')}>1</button>
        <button className="calculatorButton mathButton" type="button" onClick={() => handleButtonClick('2')}>2</button>
        <button className="calculatorButton mathButton" type="button" onClick={() => handleButtonClick('3')}>3</button>
        <button className="mathButton calculatorButton operationButton" type="button" onClick={() => handleButtonClick('+')}>
          +
        </button>
        <button className="calculatorButton zero mathButton" type="button" onClick={() => handleButtonClick('0')}>0</button>
        <button className="calculatorButton mathButton" type="button" onClick={() => handleButtonClick('.')}>.</button>
        <button className="mathButton calculatorButton equalsButton" type="button" onClick={() => handleButtonClick('=')}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
