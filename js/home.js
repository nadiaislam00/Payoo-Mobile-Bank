document.getElementById('btn-add-money').addEventListener('click',function(event){

event.preventDefault();

// get money to be added

const addMoney = document.getElementById('add-money-input').value;
console.log(addMoney);

// get the pin number

const pinNumber = document.getElementById('pin').value;
console.log(pinNumber);

})