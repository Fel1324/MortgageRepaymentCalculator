const resultsEl = document.querySelector("#results");

export function showResults(result) {
  if(!result) {
    resultsEl.classList.add("empty");

    resultsEl.innerHTML = `
      <img src="./src/assets/images/illustration-empty.svg" alt="">
      <h2>Results shown here</h2>
      <p>
        Complete the form and click “calculate repayments” to see what 
        your monthly repayments would be.
      </p>
    `;
  }
}
