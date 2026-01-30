let accept1 = document.querySelector('.accepted')
accept1.addEventListener('click', (evt) => {
accept1.style.backgroundColor = 'darkgreen';
accept1.textContent = 'Accepted';
});

let decline1 = document.querySelector('.declined')
decline1.addEventListener('click', (evt) => {
decline1.style.backgroundColor = 'coral';
decline1.textContent = 'Declined';
});

let message1 = document.querySelector('.message')
message1.addEventListener('click', (evt) => {
message1.style.backgroundColor = 'lightyellow';
message1.textContent = 'Sending message..';
setTimeout(() => {
 alert("I will call you later"); // Show alert after update
}, 200);

});
