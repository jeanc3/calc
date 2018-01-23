import React from 'react'
import { Card } from 'material-ui/Card'

const Payment = props => {
  return (
    <div className="col-12 col-md-6 box">
      <Card className="materialCard">
        <div className="inputs">
          <div className="heading">
            Payment
          </div>
          <div className="paymentBox">
            <span className="paymentSign">$</span>
            <span className="paymentAmount">{props.payment}</span>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Payment
