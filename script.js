let userName = prompt("введите ваше имя:", "Никита");
if (userName === null || userName === "")
    userName = "Гость";

alert("Привет, " + userName + "! Добро пожаловать на страницу музыканта и звукорежиссёра.");
console.log("Пользователь " + userName + " зашел на страницу.");

const trackVolumes = [70, 85, 110, 65, 92, 75, 105]; 
let quietTracks = 0;
console.log("поиск тихих треков (до 75 дБ) ...");

for (let i = 0; i < trackVolumes.length; ++i) {
    if (trackVolumes[i] <= 75) {
        quietTracks++;
        console.log("найден трек с громкостью " + trackVolumes[i] + " дБ");
    }
}
console.log("ВСЕГО ТИХИХ ТРЕКОВ: " + quietTracks);