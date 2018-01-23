import React from 'react'
import { Card } from 'material-ui/Card'
import TextField from 'material-ui/TextField'

const Inputs = ({
  amount,
  length,
  rate,
  handleChange,
}) => {
  return (
    <div className="col-12 col-md-6 box">
      <Card className="materialCard">
        <div className="inputs">
          <div className="heading">
            Inputs
          </div>
          <TextField
            name='amount'
            value={amount}
            onChange={handleChange}
            floatingLabelText='Amount'
          /><br/>
          <TextField
            name='length'
            value={length}
            onChange={handleChange}
            floatingLabelText='Length'
          /><br/>
          <TextField
            name='rate'
            value={rate}
            onChange={handleChange}
            floatingLabelText='Rate'
          /><br/>
        </div>
      </Card>
    </div>
  )
}

export default Inputs
