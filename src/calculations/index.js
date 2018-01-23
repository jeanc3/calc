export * from './validateInput'
export * from './calculatePayment'
export * from './calculateAmortization'

export const calculate = (state, fns) => {
  return fns.reduce((acc, curr) => curr(acc), state)
}
