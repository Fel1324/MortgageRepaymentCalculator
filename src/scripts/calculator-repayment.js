import { formatCurrencyGBP } from "./utils/format-value.js"

export function calculatorRepayment({ amount, term, rate, repayment, interestOnly}) {
  const annualInterestRate = rate / 100
  const termPerMonth = term * 12

  if (repayment.checked) {
    const monthlyInterestRate = annualInterestRate / 12

    const capitalizationFactor = (1 + monthlyInterestRate) ** termPerMonth

    const monthlyValue = amount * ((monthlyInterestRate * (capitalizationFactor)) / ((capitalizationFactor) - 1))
    const annualValue = monthlyValue * termPerMonth

    return {
      monthlyRepayments: formatCurrencyGBP(monthlyValue),
      totalRepay: formatCurrencyGBP(annualValue)
    }
  }

  if (interestOnly.checked) {
    const monthlyInstallment = (amount * annualInterestRate) / 12
    const annualValue = (monthlyInstallment * termPerMonth) + amount
    
    return {
      monthlyRepayments: formatCurrencyGBP(monthlyInstallment),
      totalRepay: formatCurrencyGBP(annualValue)
    }
  }
}
