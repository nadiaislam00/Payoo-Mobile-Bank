document.getElementById('cash-out').addEventListener('click', function(){

    document.getElementById('cashout').classList.remove('hidden');
    document.getElementById('addmoney').classList.add('hidden');


})

document.getElementById('add-btn').addEventListener('click', function(){

    document.getElementById('cashout').classList.add('hidden');
    document.getElementById('addmoney').classList.remove('hidden');


})