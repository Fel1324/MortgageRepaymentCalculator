import { formatDecimalGBP } from "./format-value.js"

export function onlyNumbers(input) {
  let value = input.value.replace(/\D+/g, "")
  value = Number(value)

  if (input.id === "mortgage-amount") {
    input.value = formatDecimalGBP(value)
  } else {
    input.value = value
  }
}
