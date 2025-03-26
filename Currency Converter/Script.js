function convertCurrency() {
    const exchangeRates = {
        USD: { USD: 1, EUR: 0.85, GBP: 0.75, INR: 74.5 },
        EUR: { USD: 1.18, EUR: 1, GBP: 0.88, INR: 87.5 },
        GBP: { USD: 1.33, EUR: 1.14, GBP: 1, INR: 99.2 },
        INR: { USD: 0.013, EUR: 0.011, GBP: 0.010, INR: 1 }
    };

    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = 'Please enter a valid amount.';
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}
