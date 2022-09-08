import React, { Component } from 'react';
import calculate from '../../logic/calculate';
import './calculator.scss';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: '',
      operation: '',
    };
  }

  handleClick(e) {
    const text = e.target.textContent;
    const result = calculate(this.state, text);
    return this.setState(result);
  }

  render() {
    const { total, next, operation } = this.state;
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
            <button type="button" className="btn clear-all number" onClick={this.handleClick.bind(this)}>AC</button>
            <button type="button" className="btn number" onClick={this.handleClick.bind(this)}>+/-</button>
            <button type="button" className="btn modulus number" onClick={this.handleClick.bind(this)}>%</button>
            <button type="button" className="btn divide operator" onClick={this.handleClick.bind(this)}>÷</button>
          </div>
          <div className="second-div">
            <button type="button" className="btn number" onClick={this.handleClick.bind(this)}>7</button>
            <button type="button" className="btn number" onClick={this.handleClick.bind(this)}>8</button>
            <button type="button" className="btn number" onClick={this.handleClick.bind(this)}>9</button>
            <button type="button" className="btn multiplication operator" onClick={this.handleClick.bind(this)}>x</button>
          </div>
          <div className="third-div">
            <button type="button" className="btn number" onClick={this.handleClick.bind(this)}>4</button>
            <button type="button" className="btn number" onClick={this.handleClick.bind(this)}>5</button>
            <button type="button" className="btn number" onClick={this.handleClick.bind(this)}>6</button>
            <button type="button" className="btn substraction operator" onClick={this.handleClick.bind(this)}>-</button>
          </div>
          <div className="fourth-div">
            <button type="button" className="btn number" onClick={this.handleClick.bind(this)}>1</button>
            <button type="button" className="btn number" onClick={this.handleClick.bind(this)}>2</button>
            <button type="button" className="btn number" onClick={this.handleClick.bind(this)}>3</button>
            <button type="button" className="btn addition operator" onClick={this.handleClick.bind(this)}>+</button>
          </div>
          <div className="fourth-div">
            <button type="button" className="btn number zero" onClick={this.handleClick.bind(this)}>0</button>
            <button type="button" className="btn period number" onClick={this.handleClick.bind(this)}>.</button>
            <button type="button" className="btn equals-to operator" onClick={this.handleClick.bind(this)}>=</button>
          </div>
        </div>
      </>
    );
  }
}
export default Calculator;
