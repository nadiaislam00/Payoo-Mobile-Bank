document.getElementById('btn-cashOut').addEventListener('click', function(event){

    event.preventDefault();
    
    const cashoutMoney = document.getElementById('cashout-input').value;
    console.log(cashoutMoney);
    
    const pinNumber = document.getElementById('cash-pin').value;
    
    
    if(pinNumber==='1234'){
    
        const balance = document.getElementById('balance').innerText;
    const cashoutNumber = parseFloat(cashoutMoney);
    const balanceNumber = parseFloat(balance);
        const totalBalance = balanceNumber - cashoutNumber;
        document.getElementById('balance').innerText = totalBalance;

        alert('Cash Out Success!!')
    }
    else{
        alert('Wrong PIN number!!');
    }

})