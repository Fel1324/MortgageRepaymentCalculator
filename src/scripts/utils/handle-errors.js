const mortgageAmountEl = document.querySelector("#mortgage-amount")
const mortgageTermEl = document.querySelector("#mortgage-term")
const interestRateEl = document.querySelector("#interest-rate")

const amountSpan = document.querySelector("#mortgage-amount-wrapper span")
const amountInputDiv = document.querySelector("#mortgage-amount-wrapper .input-text")
const amountErrorMessage = document.querySelector("#mortgage-amount-wrapper .error-message")

const termSpan = document.querySelector("#mortgage-term-wrapper span")
const termInputDiv = document.querySelector("#mortgage-term-wrapper .input-text")
const termErrorMessage = document.querySelector("#mortgage-term-wrapper .error-message")

const rateSpan = document.querySelector("#interest-rate-wrapper span")
const rateInputDiv = document.querySelector("#interest-rate-wrapper .input-text")
const rateErrorMessage = document.querySelector("#interest-rate-wrapper .error-message")

function toggleErrorState(span, inputDiv, errorMsg, addStyleError) {
  if (addStyleError) {
    span.classList.add("error-span")
    inputDiv.classList.add("error-input")
    errorMsg.style.display = "block"

  } else {
    span.classList.remove("error-span")
    inputDiv.classList.remove("error-input")
    errorMsg.style.display = "none"
  }
}

function setupInputValidation(inputEl, span, inputDiv, errorMsg) {
  toggleErrorState(span, inputDiv, errorMsg, true)
  
  inputEl.oninput = () => {
    if(inputEl.value === "") {
      toggleErrorState(span, inputDiv, errorMsg, true)
    } else {
      toggleErrorState(span, inputDiv, errorMsg, false)
    }
  }
}

export function validateRequiredFields(formValues) {
  const { amount, term, rate } = formValues;

  if(!amount) {
    setupInputValidation(mortgageAmountEl, amountSpan, amountInputDiv, amountErrorMessage)
    return
  }

  if(!term) {
    setupInputValidation(mortgageTermEl, termSpan, termInputDiv, termErrorMessage)
    return
  }

  if(!rate) {
    setupInputValidation(interestRateEl, rateSpan, rateInputDiv, rateErrorMessage)
    return;
  }
}
