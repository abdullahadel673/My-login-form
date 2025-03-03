console.log('home added')

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoneyAmount = document.getElementById('add-money-amount').value;
    console.log(addMoneyAmount)
    const pinNumber = document.getElementById('pin-number-added').value;
    console.log(pinNumber)
})