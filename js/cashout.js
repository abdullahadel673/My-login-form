document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutAmount = document.getElementById('input-cash-out').value;
    const cashOutPin = document.getElementById('input-cash-out-pin').value;
    console.log(cashOutAmount, cashOutPin)
    if (cashOutPin === '1234') {
        const totalBalance = document.getElementById('balance').innerText;
        const balanceNumber = parseFloat(totalBalance);
        const cashOutNumber = parseFloat(cashOutAmount);
        const newBalance = balanceNumber - cashOutNumber;
        document.getElementById('balance').innerText = newBalance;
    }
    else {
        alert('Failed to cash out.Please try again.')
    }
})