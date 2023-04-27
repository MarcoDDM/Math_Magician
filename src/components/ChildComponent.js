import React from 'react';
import PropTypes from 'prop-types';

function ChildComponent({ calcData, handleButtonClick }) {
  return (
    <div className="calculator container">
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
        <button
          className="calculatorButton mathButton"
          type="button"
          onClick={() => handleButtonClick('AC')}
        >
          AC
        </button>
        <button
          className="calculatorButton mathButton"
          type="button"
          onClick={() => handleButtonClick('+/-')}
        >
          +/-
        </button>
        <button
          className="calculatorButton mathButton"
          type="button"
          onClick={() => handleButtonClick('%')}
        >
          %
        </button>
        <button
          className="mathButton calculatorButton operationButton"
          type="button"
          onClick={() => handleButtonClick('÷')}
        >
          ÷
        </button>
        <button
          className="calculatorButton mathButton"
          type="button"
          onClick={() => handleButtonClick('7')}
        >
          7
        </button>
        <button
          className="calculatorButton mathButton"
          type="button"
          onClick={() => handleButtonClick('8')}
        >
          8
        </button>
        <button
          className="calculatorButton mathButton"
          type="button"
          onClick={() => handleButtonClick('9')}
        >
          9
        </button>
        <button
          className="mathButton calculatorButton operationButton"
          type="button"
          onClick={() => handleButtonClick('x')}
        >
          x
        </button>
        <button
          className="calculatorButton mathButton"
          type="button"
          onClick={() => handleButtonClick('4')}
        >
          4
        </button>
        <button
          className="calculatorButton mathButton"
          type="button"
          onClick={() => handleButtonClick('5')}
        >
          5
        </button>
        <button
          className="calculatorButton mathButton"
          type="button"
          onClick={() => handleButtonClick('6')}
        >
          6
        </button>
        <button
          className="mathButton calculatorButton operationButton"
          type="button"
          onClick={() => handleButtonClick('-')}
        >
          -
        </button>
        <button
          className="calculatorButton mathButton"
          type="button"
          onClick={() => handleButtonClick('1')}
        >
          1
        </button>
        <button
          className="calculatorButton mathButton"
          type="button"
          onClick={() => handleButtonClick('2')}
        >
          2
        </button>
        <button
          className="calculatorButton mathButton"
          type="button"
          onClick={() => handleButtonClick('3')}
        >
          3
        </button>
        <button
          className="mathButton calculatorButton operationButton"
          type="button"
          onClick={() => handleButtonClick('+')}
        >
          +
        </button>
        <button
          className="calculatorButton zero mathButton"
          type="button"
          onClick={() => handleButtonClick('0')}
        >
          0
        </button>
        <button
          className="calculatorButton mathButton"
          type="button"
          onClick={() => handleButtonClick('.')}
        >
          .
        </button>
        <button
          className="mathButton calculatorButton equalsButton"
          type="button"
          onClick={() => handleButtonClick('=')}
        >
          =
        </button>
      </div>
    </div>
  );
}

ChildComponent.propTypes = {
  calcData: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};

export default ChildComponent;
