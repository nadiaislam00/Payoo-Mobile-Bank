document.getElementById('login-btn').addEventListener('click', function(event){

event.preventDefault();
console.log('Login button clicked');

const phoneNumber = document.getElementById('phone-number').value;
const pinNumber = document.getElementById('pin-number').value;
console.log(phoneNumber, pinNumber);

if(phoneNumber==='5' && pinNumber==='134'){
    console.log('You are logged In');
    window.location.href= './home.html';
}
else{
   alert('Wrong PIN or Phone Number');
}
})