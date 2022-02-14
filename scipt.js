let temperaturesCelsius = [24, 18, 27, 19, 21, 16, 26, 21]
let temperaturesFahrenheit = [0, 0, 0, 0, 0, 0, 0]

// Conversion
for (let x = 0; x < 8; x++) {
    temperaturesFahrenheit[x] = (temperaturesCelsius[x] * 9 / 5) + 32;

}
// console.log(temperaturesFahrenheit)


let todayMax = document.querySelector(".todayMax");
let todayMin = document.querySelector(".todayMin");


let tomorrowMax = document.querySelector(".tomorrowMax");
let tomorrowMin = document.querySelector(".tomorrowMin");

let fridayMax = document.querySelector(".fridayMax");
let fridayMin = document.querySelector(".fridayMin");

let saturdayMax = document.querySelector(".saturdayMax");
let saturdayMin = document.querySelector(".saturdayMin");

function convert(element) {
    if (element.value === "°F") {
        todayMax.innerText = temperaturesFahrenheit[0] + "°";
        todayMin.innerText = temperaturesFahrenheit[1] + "°";

        tomorrowMax.innerText = temperaturesFahrenheit[2] + "°";
        tomorrowMin.innerText = temperaturesFahrenheit[3] + "°";

        fridayMax.innerText = temperaturesFahrenheit[4] + "°";
        fridayMin.innerText = temperaturesFahrenheit[5] + "°";

        saturdayMax.innerText = temperaturesFahrenheit[6] + "°";
        saturdayMin.innerText = temperaturesFahrenheit[7] + "°";

    }
    if (element.value === "°C") {
        todayMax.innerText = temperaturesCelsius[0] + "°";
        todayMin.innerText = temperaturesCelsius[1] + "°";

        tomorrowMax.innerText = temperaturesCelsius[2] + "°";
        tomorrowMin.innerText = temperaturesCelsius[3] + "°";

        fridayMax.innerText = temperaturesCelsius[4] + "°";
        fridayMin.innerText = temperaturesCelsius[5] + "°";

        saturdayMax.innerText = temperaturesCelsius[6] + "°";
        saturdayMin.innerText = temperaturesCelsius[7] + "°";

    }
}


let cookie = document.querySelector(".cookie")

function accept() {
    cookie.remove();
}