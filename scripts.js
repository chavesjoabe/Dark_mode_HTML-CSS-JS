const button = document.querySelector("#btn");
const site = document.querySelector("html");
const logo = document.querySelector("#logo");
const inputElement = document.querySelector("input");

if (inputElement.checked === false) logo.src = "images/logo_KLG_BLCK.png";

button.addEventListener("change", () => {
    site.classList.toggle("dark");

    if (inputElement.checked === true) logo.src = "images/logo_KLG_WHITE.png";
    else logo.src = "images/logo_KLG_BLCK.png";
});