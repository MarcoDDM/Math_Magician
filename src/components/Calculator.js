import './Calculator.css';

const Calculator = () => (
  <div className="container">
    <ChildComponent />
  </div>
);

function ChildComponent() {
  return (
    <div className="calculator">
      <input className="inputContainer" type="text" id="myInput" name="name" pattern="[0-9+\-*/(). ]+" />
      <div className="buttons">
        <input className="calculatorButton mathButton" type="button" value="AC" />
        <input className="calculatorButton mathButton" type="button" value="+/-" />
        <input className="calculatorButton mathButton" type="button" value="%" />
        <input className="calculatorButton mathButtonOrange" type="button" value="÷" />
        <br />
        <input className="calculatorButton" type="button" value="7" />
        <input className="calculatorButton" type="button" value="8" />
        <input className="calculatorButton" type="button" value="9" />
        <input className="calculatorButton mathButtonOrange" type="button" value="x" />
        <br />
        <input className="calculatorButton" type="button" value="4" />
        <input className="calculatorButton" type="button" value="5" />
        <input className="calculatorButton" type="button" value="6" />
        <input className="calculatorButton mathButtonOrange" type="button" value="-" />
        <br />
        <input className="calculatorButton" type="button" value="1" />
        <input className="calculatorButton" type="button" value="2" />
        <input className="calculatorButton" type="button" value="3" />
        <input className="calculatorButton mathButtonOrange" type="button" value="+" />
        <br />
        <input className="calculatorButton zero" type="button" value="0" />
        <input className="calculatorButton" type="button" value="." />
        <input className="calculatorButton mathButtonOrange" type="button" value="=" />
      </div>
    </div>
  );
}

export default Calculator;
