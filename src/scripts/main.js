import { showResults } from "./show-results.js"
import { formatCurrencyGBP } from "./utils/format-value.js"
import { onlyNumbers } from "./utils/only-numbers.js"
import { validateRequiredFields } from "./utils/handle-errors.js"

const form = document.querySelector("#calculator-form")
const inputsText = document.querySelectorAll("input[type='text']")

const repaymentEl = document.querySelector("#repayment")
repaymentEl.checked = true;
const interestOnly = document.querySelector("#interest-only")

const btnClearAll = document.querySelector("#clear")

let monthlyRepayments
let totalRepayments

showResults({})

inputsText.forEach((input) => {
  input.oninput = () => {
    onlyNumbers(input);
  }
})

btnClearAll.onclick = () => {
  inputsText.forEach((input) => {
    input.value = ""
  })

  showResults({})
}

form.onsubmit = (e) => {
  e.preventDefault();

  const calculatorForm = new FormData(form);

  const mortgageAmount = calculatorForm.get("mortgage-amount")
  const mortgageTerm = calculatorForm.get("mortgage-term")
  const interestRate = calculatorForm.get("interest-rate")

  validateRequiredFields({
    amount: mortgageAmount,
    term: mortgageTerm,
    rate: interestRate,
  });

  const amount = Number(mortgageAmount.split(",").join(""))
  const term = Number(mortgageTerm)
  const rate = Number(interestRate)

  const annualInterestRate = rate / 100
  const termPerMonth = term * 12

  if (repaymentEl.checked) {
    const monthlyInterestRate = annualInterestRate / 12

    const capitalizationFactor = (1 + monthlyInterestRate) ** termPerMonth

    const monthlyValue = amount * ((monthlyInterestRate * (capitalizationFactor)) / ((capitalizationFactor) - 1))
    const annualValue = monthlyValue * termPerMonth

    monthlyRepayments = formatCurrencyGBP(monthlyValue)
    totalRepayments = formatCurrencyGBP(annualValue)
  }

  if (interestOnly.checked) {
    const monthlyInstallment = (amount * annualInterestRate) / 12
    const annualValue = (monthlyInstallment * termPerMonth) + amount
    
    monthlyRepayments = formatCurrencyGBP(monthlyInstallment)
    totalRepayments = formatCurrencyGBP(annualValue)
  }

  showResults({
    repayments: monthlyRepayments,
    total: totalRepayments
  })
}
