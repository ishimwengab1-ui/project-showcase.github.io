function convert() {
  let amount = parseFloat(document.getElementById("amount").value);
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;

  if (isNaN(amount)) {
    alert("Enter a valid amount");
    return;
  }

  // Approx exchange rates
  const rates = {
    USD: 1,
    EUR: 0.92,
    RWF: 1300
  };

  // Convert to USD
  let usdAmount = amount / rates[from];

  // Convert to target currency
  let result = usdAmount * rates[to];

  document.getElementById("result").innerText = result.toLocaleString();
}