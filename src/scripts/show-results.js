const resultsEl = document.querySelector("#results")

export function showResults(results) {
  const { monthlyRepayments, totalRepay } = results;

  if(!monthlyRepayments || !totalRepay) {
    resultsEl.classList.add("empty")
    resultsEl.classList.remove("not-empty")

    resultsEl.innerHTML = `
      <img src="./src/assets/images/illustration-empty.svg" alt="">
      <h2>Results shown here</h2>
      <p>
        Complete the form and click “calculate repayments” to see what your monthly repayments would be.
      </p>
    `;
  } else {
    resultsEl.classList.remove("empty")
    resultsEl.classList.add("not-empty")

    resultsEl.innerHTML = `
      <h2>Your results</h2>
      <p>
        Your results are shown below based on the information you provided. To adjust the results, edit the form and click“calculate repayments” again.
      </p>

      <div class="show-results">
        <div class="monthly-wrapper">
          <p>Your monthly repayments</p>
          <strong class="monthly">${monthlyRepayments}</strong>
        </div>

        <div class="total-wrapper">
          <p>Total you'll repay over the term</p>
          <strong class="total">${totalRepay}</strong>
        </div>        
      </div>
    `;    
  }
}
