console.log('home added')

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoneyAmount = document.getElementById('add-money-amount').value;
    console.log(addMoneyAmount)
    const pinNumber = document.getElementById('pin-number-added').value;
    console.log(pinNumber)

    if (pinNumber === '1234') {
        console.log('add money into your balance')
        const availableBalance = document.getElementById('balance').innerText;
        console.log(typeof availableBalance)
        const addMoneyNumber = parseFloat(addMoneyAmount);
        const balance = parseFloat(availableBalance);
        const newBalance = addMoneyNumber + balance;
        console.log(newBalance);
        document.getElementById('balance').innerText = newBalance;
    }
    else {
        alert('wrong pin number.please try again!')
    }
})