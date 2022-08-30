"use strict";

//Dark/Light Mode
window.addEventListener("load", () => {
    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "light");
    }

    const theme = document.querySelector("#themeSelector");
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        theme.textContent = "☀️";
    } else {
        theme.textContent = "🌙";
    }

    theme.addEventListener("click", () => {
        if (localStorage.getItem("theme") === "light") {
            localStorage.setItem("theme", "dark");
            theme.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            theme.textContent = "🌙";
        }

        document.body.classList.toggle("dark");
    });
});

//E-mail Validation
var email = document.getElementById("e-mail");
//Regular Expression
var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function emailValidation() {
    var pass = true;
    if (!(regexEmail.test(email.value))) {
        email.setCustomValidity("E-mail format is incorrect. Please try again.");
        pass = false;
    } else {
        email.setCustomValidity("");
    }
}

function createEventListeners() {
    var send = document.getElementById('button');
    send.addEventListener("click", emailValidation, false);
}

function pageSetUp() {
    createEventListeners();
}
window.addEventListener("load", pageSetUp, false);

//Navigation Toggle Icon
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.addEventListener("click", function () {
    navlist.classList.toggle("active");
});

window.onscroll = () => {
    navlist.classList.remove("active");
};