import React from 'react'
import { Card } from 'material-ui/Card'
import Chart from 'chart.js'

const initializeChart = (ctx, { amortization }) => {
  const balances = amortization.map(({ balance }) => balance)
  return new Chart(ctx, {
    type: 'line',
    data: {
      lables: Array(balances.length),
      datasets: [{
        label: "Amortization balance",
        data: balances,
      }]
    }
  })
}

const updateChart = (chart, { amortization }) => {
  const balances = amortization.map(({ balance }) => balance)
  chart.data.datasets[0].data = balances
  chart.update({
    duration: 0,
  })
}

class AmortizationChart extends React.Component {
  componentWillReceiveProps(nextProps) {
    updateChart(this.chart, nextProps)
  }
  componentDidMount() {
    this.chart = initializeChart(this.canvas, this.pros)
  }
  render() {
    return (
      <div className="col-12 col-md-6 box">
        <Card className='materialCard'>
          <div className="inputs">
            <div className="heading">
              AmortizationChart
            </div>
            <canvas
              ref={canvas => this.canvas = canvas}
              width='400'
              height='220'
            />
          </div>
        </Card>
      </div>
    )
  }
}

export default AmortizationChart
