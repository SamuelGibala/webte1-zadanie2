
let selectedOption = document.getElementById('country');
let country = document.getElementsByClassName('country');
let city = document.getElementsByClassName('city');
let arrCountry = Array.from(country);
let arrCity = Array.from(city);

const arr = ["slovakia","czech","austria","bratislava","kosice","prague","brno","viena","graz",
            "airportBA","patronska","airportKE","ostrovskeho","airportPRA","vysehradska","airportBR",
            "mlynska","airportSCH","landgutgasse","airportGR","bahnhofgurtel"];


const arr2 = ["Slovensko","Česko","Rakúsko","Bratislava","Košice","Praha","Brno","Viedeň","Graz","Letisko Bratislava",
            "Panónska cesta 3695/23","Letisko Košice","Ostrovského 2333/1","Letisko Praha","Vyšehradská 1411","Letisko Brno",
            "Mlýnská 333","Letisko Viedeň","Landgutgasse 41","Letisko Graz","Bahnhofgürtel 37"];

let countryName = arr2[0];
let cityName = arr2[3];
let placeName = arr2[9];


selectedOption.onchange = function () {
    arrCountry.forEach(function (element) {
        element.style.display = 'none';
    });
    arrCity.forEach(function (element) {
        element.style.display = 'none';
    });
    document.getElementById(selectedOption.value).style.display = 'inline';
    countryName = arr2[arr.indexOf(selectedOption.value)];
    document.getElementById(document.getElementById(selectedOption.value).value).style.display = 'inline';
    switch (selectedOption.value){
        case "slovakia":
            countryName = arr2[0];
            cityName = arr2[3];
            placeName = arr2[9];
            break;
        case "czech":
            countryName = arr2[1];
            cityName = arr2[5];
            placeName = arr2[13];
            break;
        case "austria":
            countryName = arr2[2];
            cityName = arr2[7];
            placeName = arr2[17];
            break;
    }

}

for (let i = 0; i < country.length; i++) {
    country.item(i).onchange = function () {
        arrCity.forEach(function (element) {
            element.style.display = 'none';
        });

        document.getElementById(country.item(i).value).style.display = 'inline';
        cityName = arr2[arr.indexOf(country.item(i).value)];

        switch (country.item(i).value){
            case "bratislava":
                placeName = arr2[9];
                break;
            case "kosice":
                placeName = arr2[11];
                break;
            case "prague":
                placeName = arr2[13];
                break;
            case "brno":
                placeName = arr2[15];
                break;
            case "viena":
                placeName = arr2[17];
                break;
            case "graz":
                placeName = arr2[19];
                break;
        }

    }
}

for (let i = 0; i < city.length; i++) {
        city.item(i).onchange = function () {

        placeName = arr2[arr.indexOf(city.item(i).value)];

    }
}

