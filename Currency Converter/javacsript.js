function convertCurrency() {
    const r = {
        USD: { USD: 1, EUR: 0.85, GBP: 0.75, INR: 74.5 },
        EUR: { USD: 1.18, EUR: 1, GBP: 0.88, INR: 87.5 },
        GBP: { USD: 1.33, EUR: 1.14, GBP: 1, INR: 99.2 },
        INR: { USD: 0.013, EUR: 0.011, GBP: 0.01, INR: 1 }
    };

    const [f, t, a] = ['fromCurrency', 'toCurrency', 'amount'].map(id => document.getElementById(id).value);
    const res = isNaN(a = parseFloat(a)) || a <= 0 ? 'Enter a valid amount.' 
        : `${a} ${f} = ${(a * r[f][t]).toFixed(2)} ${t}`;

    document.getElementById('result').innerText = res;
}
