import React from 'react'
import { Card } from 'material-ui/Card'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

const AmortizationTable = ({ amortization }) => {
  return (
    <div className="col-12 col-md-6 box">
      <Card className='materialCard'>
        <div className="inputs">
          <div className="heading">
            Amortization Table
          </div>
          <Table
            height='220px'
          >
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
            >
              <TableRow>
                <TableHeaderColumn>Month</TableHeaderColumn>
                <TableHeaderColumn>Interest</TableHeaderColumn>
                <TableHeaderColumn>Principal</TableHeaderColumn>
                <TableHeaderColumn>Balance</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              showRowHover={true}
            >
            {
              amortization.map(({
                interest,
                principal,
                balance,
              }, i) => (
                <TableRow key={i}>
                  <TableRowColumn>{i+1}</TableRowColumn>
                  <TableRowColumn>{interest}</TableRowColumn>
                  <TableRowColumn>{principal}</TableRowColumn>
                  <TableRowColumn>{balance}</TableRowColumn>
                </TableRow>
              ))
            }
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  )
}

export default AmortizationTable
