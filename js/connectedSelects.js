

let selectedOption = document.getElementById('country');
let country = document.getElementsByClassName('country');
let city = document.getElementsByClassName('city');
let arrCountry = Array.from(country);
let arrCity = Array.from(city);

selectedOption.onchange = function () {
    arrCountry.forEach(function (element) {
        element.style.display = 'none';
    });
    arrCity.forEach(function (element) {
        element.style.display = 'none';
    });
    document.getElementById(selectedOption.value).style.display = 'inline';
    document.getElementById(document.getElementById(selectedOption.value).value).style.display = 'inline';
}

for (let i = 0; i < country.length; i++) {
    country.item(i).onchange = function () {
        arrCity.forEach(function (element) {
            element.style.display = 'none';
        });
        document.getElementById(country.item(i).value).style.display = 'inline';
    }
}