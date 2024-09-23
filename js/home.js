document.getElementById('btn-add-money').addEventListener('click',function(event){

event.preventDefault();

// get money to be added

const addMoney = document.getElementById('add-money-input').value;
console.log(addMoney);

// get the pin number

const pinNumber = document.getElementById('pin').value;
console.log(pinNumber);


if(pinNumber==='1234'){
    console.log('Money Added');


    // get the current balance

    const balance = document.getElementById('balance').innerText;
const addMoneyNumber = parseFloat(addMoney);
const balanceNumber = parseFloat(balance);
    const totalBalance = addMoneyNumber + balanceNumber;
    document.getElementById('balance').innerText = totalBalance;
}
else{
    alert('Wrong PIN number!!');
}
})