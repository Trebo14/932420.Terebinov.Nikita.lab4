let userName = prompt("Введите ваше имя:", "Никита");
if (userName === null || userName === "")
    userName = "Гость";

alert("Привет, " + userName + "! Добро пожаловать на страницу музыканта и звукорежиссёра.");
console.log("Пользователь " + userName + " зашел на страницу.");