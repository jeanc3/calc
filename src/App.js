import React, { Component } from 'react';
import './App.css';
import Inputs from './components/Inputs';
import Payment from './components/Payment';
import AmortizationTable from './components/AmortizationTable'
//import AmortizationChart from './components/AmortizationChart'
import {
  calculate,
  validateInput,
  calculatePayment,
  calculateAmortization,
} from './calculations'

const updateInput = (state, { name, value }) => {
  if (name === 'length' && value > 30) {
    return {
      ...state,
      length: 30
    }
  }
  return {
    ...state,
    [name]: value,
  }
}

class App extends Component {
  state = {
    amount: 400000,
    length: 25,
    rate: 2.79,
    payment: 2000,
    amortization: [],
  }
  handleChange = event => {
    const { name, value } = event.target
    let newState = updateInput(this.state, { name, value })
    newState = calculate(newState, [
      validateInput,
      calculatePayment,
      calculateAmortization,
    ])
    this.setState(newState)
  }
  componentWillMount() {
    let newState = calculate(this.state, [
      validateInput,
      calculatePayment,
      calculateAmortization,
    ])
    this.setState(newState)
  }
  render() {
    const {
      payment,
      amortization,
    } = this.state
    return (
      <div className='container'>
        <div className="row">
          <Inputs
            { ...this.state }
            handleChange={this.handleChange}
          />
          <Payment
            payment={payment}
          />
          <AmortizationTable
            amortization={amortization}
          />
        </div>
      </div>
    );
  }
}

export default App;
