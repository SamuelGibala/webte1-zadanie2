let gender = document.getElementsByName("gender");
let vehicle = document.getElementsByName("vehicle");
let options = document.getElementsByName("box");
let different = document.getElementById('differentText');
let optionsArr = Array.from(options);
let vehiclePrice;


function showRadio (element){
    for(let i = 0;i<element.length;i++){
    if(element[i].checked)
        return element[i].value;
    }
}

const priceArr = [10,10,0,10,3,3];

function makePrice(){
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked)
            vehiclePrice= vehiclePrice + priceArr[i];
    }

    if (options[2].checked)
        return vehiclePrice + " € + kalkulácia doplnkov";
    else
        return vehiclePrice + " €";
}


function countOptions(){

    let sum = 0;
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked)
            sum++;
    }
    return sum;
}

function makeSum(element){

    /*element.innerHTML = "Meno: &nbsp" + name.value + "<br>" +
                        "Priezvisko: &nbsp" + surname.value + "<br>" +
                        "Pohlavie: &nbsp" + showGender()  + "<br>" +
                        "Vek: &nbsp" + age.value + "<br>" +
                        "Tel. číslo: &nbsp" + phone.value + "<br>" +
                        "Email: &nbsp" + mail.value + "<br>";*/

    let table = document.createElement("table");
    let nameRow = document.createElement("tr");
    let nameLabel = document.createElement("td");
    let nameValue = document.createElement("td");
    nameLabel.innerHTML = "Meno"
    nameValue.innerHTML = name.value;
    nameRow.appendChild(nameLabel);
    nameRow.appendChild(nameValue);

    let surnameRow = document.createElement("tr");
    let surnameLabel = document.createElement("td");
    let surnameValue = document.createElement("td");
    surnameLabel.innerHTML = "Priezvisko"
    surnameValue.innerHTML = surname.value;
    surnameRow.appendChild(surnameLabel);
    surnameRow.appendChild(surnameValue);

    let genderRow = document.createElement("tr");
    let genderLabel = document.createElement("td");
    let genderValue = document.createElement("td");
    genderLabel.innerHTML = "Pohlavie"
    genderValue.innerHTML = showRadio(gender);
    genderRow.appendChild(genderLabel);
    genderRow.appendChild(genderValue);

    let ageRow = document.createElement("tr");
    let ageLabel = document.createElement("td");
    let ageValue = document.createElement("td");
    ageLabel.innerHTML = "Vek"
    ageValue.innerHTML = age.value;
    ageRow.appendChild(ageLabel);
    ageRow.appendChild(ageValue);

    let phoneRow = document.createElement("tr");
    let phoneLabel = document.createElement("td");
    let phoneValue = document.createElement("td");
    phoneLabel.innerHTML = "Tel. číslo"
    phoneValue.innerHTML = phone.value;
    phoneRow.appendChild(phoneLabel);
    phoneRow.appendChild(phoneValue);

    let emailRow = document.createElement("tr");
    let emailLabel = document.createElement("td");
    let emailValue = document.createElement("td");
    emailLabel.innerHTML = "Email"
    emailValue.innerHTML = mail.value;
    emailRow.appendChild(emailLabel);
    emailRow.appendChild(emailValue);

    let locationRow = document.createElement("tr");
    let locationLabel = document.createElement("td");
    let locationCountryValue = document.createElement("td");
    let locationCityValue = document.createElement("td");
    let locationPlaceValue = document.createElement("td");
    locationLabel.innerHTML = "Štát, mesto, ulica"
    locationCountryValue.innerHTML = countryName;
    locationCityValue.innerHTML = cityName;
    locationPlaceValue.innerHTML = placeName;
    locationRow.appendChild(locationLabel);
    locationRow.appendChild(locationCountryValue);
    locationRow.appendChild(locationCityValue);
    locationRow.appendChild(locationPlaceValue);

    let selectRow = document.createElement("tr");
    let selectLabel = document.createElement("td");
    let selectValue = document.createElement("td");
    selectLabel.innerHTML = "Požičanie";
    selectValue.innerHTML = showRadio(vehicle);
    selectRow.appendChild(selectLabel);
    selectRow.appendChild(selectValue);

    let optionsRow = document.createElement("tr");
    if(!vehicle[0].checked) {
        let optionsLabel = document.createElement("td");
        let optionsValue = Array(6);
        optionsLabel.innerHTML = "Doplnky";
        optionsRow.appendChild(optionsLabel);

        if (countOptions()===0){
            optionsValue[0] = document.createElement("td");
            optionsValue[0].innerHTML = "žiadne";
            optionsRow.appendChild(optionsValue[0]);
        }


        if (vehicle[1].checked) {
            vehiclePrice = 70;
            for (let i = 0; i < 3; i++) {
                if (options[i].checked) {
                    optionsValue[i] = document.createElement("td");
                    if (i === 2) {
                        optionsValue[i].innerHTML = "Iné: &nbsp" + different.value;
                    } else {
                        optionsValue[i].innerHTML = optionsArr[i].value;
                    }
                    optionsRow.appendChild(optionsValue[i]);
                }
            }
        } else if (vehicle[2].checked) {
            vehiclePrice = 35;
            for (let i = 3; i < 6; i++) {
                if (options[i].checked) {
                    optionsValue[i] = document.createElement("td");
                    optionsValue[i].innerHTML = optionsArr[i].value;
                    optionsRow.appendChild(optionsValue[i]);
                }
            }
        }

    }else {
        vehiclePrice = 20;
    }

    let sumRow = document.createElement("tr");
    let sumLabel = document.createElement("td");
    let sumValue = document.createElement("td");
    sumLabel.innerHTML = "Výsledná cena";
    sumValue.innerHTML = makePrice();
    sumRow.appendChild(sumLabel);
    sumRow.appendChild(sumValue);


    table.appendChild(nameRow);
    table.appendChild(surnameRow);
    table.appendChild(genderRow);
    table.appendChild(ageRow);
    table.appendChild(phoneRow);
    table.appendChild(emailRow);
    table.appendChild(locationRow);
    table.appendChild(selectRow);
    table.appendChild(optionsRow);
    table.appendChild(sumRow);
    element.appendChild(table);


}

let openBtn = document.getElementById("openBtn");
openBtn.addEventListener("click", function() {


    if (chcecker()) {

        let spanClose = document.createElement("span");
        spanClose.innerHTML = "&times;";
        spanClose.classList.add("close");

        let summary = document.createElement("div");
        summary.classList.add("sum");

        makeSum(summary);


        let subm = document.createElement("input");
        subm.type = "submit";
        subm.value = "submit";

        let modalContent = document.createElement("div");
        modalContent.appendChild(spanClose);
        modalContent.appendChild(summary);
        modalContent.appendChild(subm);
        modalContent.classList.add("modal-content");

        let myModal = document.getElementById("myModal");
        myModal.appendChild(modalContent);
        myModal.style.display = "block";

        spanClose.addEventListener("click", function () {
            myModal.style.display = "none";
            myModal.innerHTML = "";
        })

        window.onclick = function (event) {
            if (event.target === myModal) {
                myModal.style.display = "none";
                myModal.innerHTML = "";
            }
        }
    }
})