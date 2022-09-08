import React, { useState } from 'react';
import calculate from '../../logic/calculate';
import './calculator.scss';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: '',
    operation: '',
  });

  const handleClick = (e) => {
    const text = e.target.textContent;
    const result = calculate(state, text);
    return setState(result);
  };

  const { total, next, operation } = state;
  return (
    <>
      <div className="calculator-container">
        <div className="answer-div">
          <span>
            {total}

            {operation}

            {next}
          </span>
        </div>
        <div className="first-div">
          <button type="button" className="btn clear-all number" onClick={handleClick}>AC</button>
          <button type="button" className="btn number" onClick={handleClick}>+/-</button>
          <button type="button" className="btn modulus number" onClick={handleClick}>%</button>
          <button type="button" className="btn divide operator" onClick={handleClick}>÷</button>
        </div>
        <div className="second-div">
          <button type="button" className="btn number" onClick={handleClick}>7</button>
          <button type="button" className="btn number" onClick={handleClick}>8</button>
          <button type="button" className="btn number" onClick={handleClick}>9</button>
          <button type="button" className="btn multiplication operator" onClick={handleClick}>x</button>
        </div>
        <div className="third-div">
          <button type="button" className="btn number" onClick={handleClick}>4</button>
          <button type="button" className="btn number" onClick={handleClick}>5</button>
          <button type="button" className="btn number" onClick={handleClick}>6</button>
          <button type="button" className="btn substraction operator" onClick={handleClick}>-</button>
        </div>
        <div className="fourth-div">
          <button type="button" className="btn number" onClick={handleClick}>1</button>
          <button type="button" className="btn number" onClick={handleClick}>2</button>
          <button type="button" className="btn number" onClick={handleClick}>3</button>
          <button type="button" className="btn addition operator" onClick={handleClick}>+</button>
        </div>
        <div className="fourth-div">
          <button type="button" className="btn number zero" onClick={handleClick}>0</button>
          <button type="button" className="btn period number" onClick={handleClick}>.</button>
          <button type="button" className="btn equals-to operator" onClick={handleClick}>=</button>
        </div>
      </div>
    </>
  );
};
export default Calculator;
