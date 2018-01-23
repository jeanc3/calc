export const calculateAmortization = state => {
  const {
    amount,
    length,
    rate,
    payment
  } = state

  let balanceRemaining = amount

  const amortizationMonth = new Array(length * 12).fill({}).map(() => {
    const interest = balanceRemaining * rate / 100 / 12
    const principal = payment - interest
    balanceRemaining -= principal
    return {
      interest: Math.round(interest),
      principal: Math.round(principal),
      balance: Math.round(balanceRemaining),
    }
  })

  let interestAnnual = 0
  let principalAnnual = 0

  const amortization = amortizationMonth.reduce((acc, curr, i) => {
    interestAnnual += curr.interest
    principalAnnual += curr.principal
    if (i % 12 === 11){
      const amortizationAnnual = {
        interest: interestAnnual,
        principal: principalAnnual,
        balance: curr.balance,
      }
      acc.push(amortizationAnnual)
      interestAnnual = 0
      principalAnnual = 0
    } return acc
  }, [])
  return {
    ...state,
    amortization,
  }
}
