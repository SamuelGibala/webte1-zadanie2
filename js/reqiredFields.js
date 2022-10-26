let name = document.getElementById('name');
let surname = document.getElementById('surname');
let phone = document.getElementById('phone');
let mail = document.getElementById('mail');
let age = document.getElementById('age');
let birthDate = document.getElementById('birthDate');
let labelAge = document.getElementById('warnAge');
let labelDate = document.getElementById('warnBirthDate');

function borderRed(element){
    element.style.borderColor = "red";
}

function borderBlack(element){
    element.style.borderColor = "black";
}

function ageCheck (){
    if(age.value===""){
        labelAge.innerHTML = "nezadaný vek";
        borderRed(age);
        labelAge.style.visibility = 'visible';
        return false;
    }else if(Math.trunc((new Date()-new Date(birthDate.value))/1000/3600/24/365)===(age.value*1)) {
        console.log();
        borderBlack(age);
        borderBlack(birthDate);
        labelAge.style.visibility = 'hidden';
        labelDate.style.visibility = 'hidden';
        return true;
    }else {

        borderRed(age);
        labelAge.innerHTML = "vek nesúhlasí s dátumom narodenia";
        labelAge.style.visibility = 'visible';
        borderRed(birthDate);
        labelDate.innerHTML = "vek nesúhlasí s dátumom narodenia";
        labelDate.style.visibility = 'visible';
        return false;
    }
}

function birthDateCheck (){
    if(birthDate.value==="") {
        labelDate.innerHTML = "nezadaný dátum narodenia";
        borderRed(birthDate);
        labelDate.style.visibility = 'visible';
        return false;
    }else if(Math.trunc((new Date()-new Date(birthDate.value))/1000/3600/24/365)===(age.value*1)){

        borderBlack(age);
        borderBlack(birthDate);
        labelAge.style.visibility = 'hidden';
        labelDate.style.visibility = 'hidden';
        return true;
    }else {
        labelAge.innerHTML = "vek nesúhlasí s dátumom narodenia";
        borderRed(age);
        labelAge.style.visibility = 'visible';
        labelDate.innerHTML = "vek nesúhlasí s dátumom narodenia";
        borderRed(birthDate);
        labelDate.style.visibility = 'visible';
        return false;
    }
}


function nameCheck (){
    let label = document.getElementById('warnName');

    if(name.value===""){
        label.innerHTML = "nezadané meno";
        borderRed(name);
        label.style.visibility = 'visible';
        return false;
    }else {
        borderBlack(name);
        label.style.visibility = 'hidden';
        return true;
    }
}

function surnameCheck (){
    let label = document.getElementById('warnSurname');

    if(surname.value===""){
        label.innerHTML = "nezadané priezvisko";
        borderRed(surname);
        label.style.visibility = 'visible';
        return false
    }else {
        borderBlack(surname);
        label.style.visibility = 'hidden';
        return true;
    }
}

function phoneCheck (){
    let label = document.getElementById('warnPhone');

    if(phone.value===""){
        label.innerHTML = "nezadané tel. číslo";
        borderRed(phone);
        label.style.visibility = 'visible';
        return false;
    }else if((phone.value.charAt(0)!=='+') || (phone.value.length<12 || phone.value.length>13)){
        label.innerHTML = "nesprávny formát tel. čísla";
        borderRed(phone);
        label.style.visibility = 'visible';
        return false;
    }else {
        borderBlack(phone);
        label.style.visibility = 'hidden';
        return true;
    }
}



function mailCheck (){
    let label = document.getElementById('warnMail');

    if(mail.value===""){
        label.innerHTML = "nezadaný email";
        borderRed(mail);
        label.style.visibility = 'visible';
        return false;
    }else {

        if(!mail.value.includes("@")){
            label.innerHTML = "nesprávny formát";
            borderRed(mail);
            label.style.visibility = 'visible';
            return false;
        }
        let arr = mail.value.split("@");
        let domains = arr[1].split(".");

        if(arr[0].length<3){
            label.innerHTML = "maly pocet znakov pred @";
            borderRed(mail);
            label.style.visibility = 'visible';
            return false;
        }else if(domains.length<2){
            label.innerHTML = "maly pocet domen";
            borderRed(mail);
            label.style.visibility = 'visible';
            return false;
        }else if(domains[domains.length-1].length<2 || domains[domains.length-1].length>4){
            label.innerHTML = "nespravny format vrcholovej domeny";
            borderRed(mail);
            label.style.visibility = 'visible';
            return false;
        }else {
            borderBlack(mail);
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
    let ch1 = nameCheck();
    let ch2 = surnameCheck();
    let ch3 = phoneCheck();
    let ch4 = mailCheck();
    let ch5 = ageCheck();
    let ch6 = birthDateCheck();
    return ch1 && ch2 && ch3 && ch4 && ch5 && ch6;
}