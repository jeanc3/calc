export const calculateAmortization = state => {
  const {
    amount,
    length,
    rate,
    payment
  } = state

  let balanceRemaining = amount
  let principal = 0
  // let j=0
  const amortizationMonth = new Array(length * 12).fill({}).map(() => {
    const interest = Math.round(balanceRemaining * rate / 100 / 12)
    principal = payment - interest
    // j +=1
    if (balanceRemaining<payment){
       principal = balanceRemaining
       balanceRemaining = 0
    } else {
      balanceRemaining -= principal
    }
    // console.log(j, interest, principal, balanceRemaining)

    return {
      interest: interest,
      principal: principal,
      balance: balanceRemaining,
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
    }
    return acc
  }, [])

  return {
    ...state,
    amortization,
  }
}
