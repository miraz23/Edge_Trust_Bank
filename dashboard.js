const depositButton = document.getElementById('btn-deposit')
const withdrawButton = document.getElementById('btn-withdraw')

let balanceTotal = document.getElementById('balance-total')
let depositTotal = document.getElementById('deposit-total')
let withdrawTotal = document.getElementById('withdraw-total')

function reset(inputFieldId) {
    return document.getElementById(inputFieldId).value = "";
}

depositButton.addEventListener('click', ()=>{
    let n = parseFloat(document.getElementById('deposit-field').value);
    let balance = parseFloat(balanceTotal.innerText)
    let deposit = parseFloat(depositTotal.innerText)

    if (isNaN(n) || n == 0) 
    {
        reset("deposit-field");
        alert('Please enter amount')
    }
    else if (n < 0) 
    {
        reset("deposit-field");
        alert('Amount can not be negative')
    }
    else {
        balanceTotal.innerHTML = balance + n;
        depositTotal.innerHTML = deposit + n;

        reset("deposit-field");
    }
})

withdrawButton.addEventListener('click', ()=>{
    let n = parseFloat(document.getElementById('withdraw-field').value);
    let balance = parseFloat(balanceTotal.innerText)
    let withdraw = parseFloat(withdrawTotal.innerText)
    
    if(n > balance) alert('You are broke')
    else {
        balanceTotal.innerHTML = balance - n;
        withdrawTotal.innerHTML = withdraw + n;
    }

    reset("withdraw-field");
})