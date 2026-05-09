import { showResults } from "./show-results.js"
import { onlyNumbers } from "./utils/only-numbers.js"
import { validateRequiredFields } from "./utils/handle-errors.js"
import { calculatorRepayment } from "./calculator-repayment.js"

const form = document.querySelector("#calculator-form")
const inputsText = document.querySelectorAll("input[type='text']")

const repaymentEl = document.querySelector("#repayment")
repaymentEl.checked = true;
const interestOnlyEl = document.querySelector("#interest-only")

const btnClearAll = document.querySelector("#clear")

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

  const amount = Number(mortgageAmount.split(",").join(""))
  const term = Number(mortgageTerm)
  const rate = Number(interestRate)

  const error = validateRequiredFields({
    amount,
    term,
    rate,
  });

  if(error) return

  const results = calculatorRepayment({
    amount,
    term,
    rate,
    repayment: repaymentEl,
    interestOnly: interestOnlyEl
  })

  showResults(results)
}
