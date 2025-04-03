function calculate(event) {
    event.preventDefault();
    let income = document.getElementById('income').value;
    let expenses = document.getElementById('expenses').value;
    let profit = income - expenses;
    document.getElementById('output').innerText = "Net Profit: $" + profit;
}
