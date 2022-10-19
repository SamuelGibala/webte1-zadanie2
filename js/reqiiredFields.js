let name = document.getElementById('name');
let surname = document.getElementById('surname');
let phone = document.getElementById('phone');
let mail = document.getElementById('mail');
let age = document.getElementById('age');
let birthDate = document.getElementById('birthDate');
let labelAge = document.getElementById('warnAge');
let labelDate = document.getElementById('warnBirthDate');



function ageCheck (){
    if(age.value===""){
        labelAge.innerHTML = "nezadaný vek"
        labelAge.style.visibility = 'visible';
        return false;
    }else if(Math.trunc((new Date()-new Date(birthDate.value))/1000/3600/24/365)===(age.value*1)) {
        console.log();
        labelAge.style.visibility = 'hidden';
        labelDate.style.visibility = 'hidden';
        return true;
    }else {

        labelAge.innerHTML = "vek nesúhlasí s dátumom narodenia";
        labelAge.style.visibility = 'visible';
        labelDate.innerHTML = "vek nesúhlasí s dátumom narodenia"
        labelDate.style.visibility = 'visible';
        return false;
    }
}

function birthDateCheck (){
    if(birthDate.value==="") {
        labelDate.innerHTML = "nezadaný dátum narodenia"
        labelDate.style.visibility = 'visible';
        return false;
    }else if(Math.trunc((new Date()-new Date(birthDate.value))/1000/3600/24/365)===(age.value*1)){

        labelAge.style.visibility = 'hidden';
        labelDate.style.visibility = 'hidden';
        return true;
    }else {
        labelAge.innerHTML = "vek nesúhlasí s dátumom narodenia"
        labelAge.style.visibility = 'visible';
        labelDate.innerHTML = "vek nesúhlasí s dátumom narodenia"
        labelDate.style.visibility = 'visible';
        return false;
    }
}


function nameCheck (){
    let label = document.getElementById('warnName');

    if(name.value===""){
        label.innerHTML = "nezadané meno"
        label.style.visibility = 'visible';
        return false;
    }else {
        label.style.visibility = 'hidden';
        return true;
    }
}

function surnameCheck (){
    let label = document.getElementById('warnSurname');

    if(surname.value===""){
        label.innerHTML = "nezadané priezvisko"
        label.style.visibility = 'visible';
        return false
    }else {
        label.style.visibility = 'hidden';
        return true;
    }
}

function phoneCheck (){
    let label = document.getElementById('warnPhone');

    if(phone.value===""){
        label.innerHTML = "nezadané tel. číslo"
        label.style.visibility = 'visible';
        return false;
    }else if((phone.value.charAt(0)!=='+') || (phone.value.length<12 || phone.value.length>13)){
        label.innerHTML = "nesprávny formát tel. čísla"
        label.style.visibility = 'visible';
        return false;
    }else {
        label.style.visibility = 'hidden';
        return true;
    }
}



function mailCheck (){
    let label = document.getElementById('warnMail');

    if(mail.value===""){
        label.innerHTML = "nezadaný email"
        label.style.visibility = 'visible';
        return false;
    }else {
        let arr = mail.value.split("@");
        let domains = arr[1].split(".");

        console.log(domains);
        console.log(domains[domains.length-1].length)

        if(arr[0].length<3){
            label.innerHTML = "maly pocet znakov pred @";
            label.style.visibility = 'visible';
            return false;
        }else if(domains.length<2){
            label.innerHTML = "maly pocet domen";
            label.style.visibility = 'visible';
            return false;
        }else if(domains[domains.length-1].length<2 || domains[domains.length-1].length>4){
            label.innerHTML = "nespravny format vrcholovej domeny";
            label.style.visibility = 'visible';
            return false;
        }else {
            label.style.visibility = 'hidden';
            return true;
        }

    }
}

mail.onblur = function (){
    mailCheck();
}

phone.onblur = function (){
    phoneCheck();
}

surname.onblur = function (){
    surnameCheck();
}

name.onblur = function (){
    nameCheck();
}

birthDate.onblur = function (){
    birthDateCheck();
}

age.onblur = function (){
    ageCheck();
}


function chcecker(){
    return nameCheck() && surnameCheck() && phoneCheck() && mailCheck() && ageCheck() && birthDateCheck();
}