"use strict";

let balance = 0;

let balanceElement = document.getElementById("balance");
let amountInput = document.getElementById("amount");
let buttondeposit = document.getElementById("deposit");
let buttonwithdraw = document.getElementById("withdraw");

function updateBalance(){
    balanceElement.textContent = balance;
}

buttondeposit.onclick = function(){
    let amount = Number(amountInput.value);
    if (isNaN(amount) || amount <= 0){
        alert("Пожалуйста, введите корректную сумму для пополнения");
        return;
    }
    balance += amount;
    updateBalance();
    amountInput.value = '';
}
buttonwithdraw.onclick = function(){
    let amount = Number(amountInput.value);
    if (isNaN(amount) || amount <= 0){
        alert("Пожалуйста, введите корректную сумму для пополнения");
        return;
    }
    if (amount > balance){
        alert("Недостаточно средств");
        return;
    }
    balance -= amount;
    updateBalance();
    amountInput.value = '';
}