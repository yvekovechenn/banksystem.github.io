"use strict";
let password = "1234";
let buttonpassword = document.getElementById("checkPassword");
let passwordinput = document.getElementById("passwordInput");
buttonpassword.onclick = function(){
    if (Number(passwordinput.value) === Number(password)){
        window.location.href = 'main.html';
    }else {
        alert("Пароль введен не верно");
        return;
    }
}