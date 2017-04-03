var fixedCostValue // Declares fixed cost
var variableCostValue // Declares variable cost
var revenueValue // Declares revenue
var result // Declares result

function breakEven() {
  fixedCostValue = document.getElementById("fixedCostValue").value; // Initializes fixed cost value
  variableCostValue = document.getElementById("variableCostValue").value; // Initializes variable cost value
  revenueValue = document.getElementById("revenueValue").value; // Initializes revenue value
  result = Math.ceil(fixedCostValue / (revenueValue - variableCostValue)); // Performs breakeven calculation
  document.getElementById("result").value = result;
  return result;
}
