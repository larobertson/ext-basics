const first = document.createElement('button');
first.innerText = "SET DATA";
first.id = "first";

const second = document.createElement('button');
second.innerText = "SHOUTOUT TO BACKEND";
second.id = "second";


document.querySelector('body').appendChild(first);
document.querySelector('body').appendChild(second);


first.addEventListener('click', () => {
  chrome.storage.local.set({"password": "123"})
  console.log('log log log, I set data');
})

second.addEventListener('click', () => {
  chrome.runtime.sendMessage({message: 'yo check the storage!!!'})
  console.log('I sent the message');
})