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
console.log("всего тихих треков: " + quietTracks);

function findMaxVolume(volumes) {
    let max = volumes[0];
    for (let v of volumes) {
        if (v > max)
            max = v;
    }
    return max;
}

function filterLoudTracks(volumes, threshold) {
    let result = [];
        for (let v of volumes) {
            if (v > threshold)
                result.push(v);
        }
    return result;
}

function calculateSum(volumes) {
    let sum = 0;
    for (let v of volumes)
        sum += v;
    return sum;
}

const maxVol = findMaxVolume(trackVolumes);
const loudTracks = filterLoudTracks(trackVolumes, 90);
const sum = calculateSum(trackVolumes);
const averageVolume = sum / trackVolumes.length;

alert("средняя громкость - " + averageVolume.toFixed(1) + " дБ, " + loudTracks.length + " треков - громкие");