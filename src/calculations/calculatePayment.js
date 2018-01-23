export const calculatePayment = state => {
  const {
    amount,
    length,
    rate,
  } = state

  const rateMonth = rate / 100 / 12
  const lengthMonth = length * 12
  const paymentFloat = amount * rateMonth / (1 - (1 + rateMonth) ** (-lengthMonth))
  const payment = Number(paymentFloat).toFixed(0)

  return {
    ...state,
    payment,
  }
}
