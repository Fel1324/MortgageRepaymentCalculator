const LOCALE = "en-GB"

export function formatDecimalGBP(value) {
  value = value.toLocaleString(LOCALE, {
    style: "decimal",
    maximumFractionDigits: 2
  })

  return value
}

export function formatCurrencyGBP(value) {
  value = value.toLocaleString(LOCALE, {
    style: "currency",
    currency: "GBP"
  })

  return value
}
