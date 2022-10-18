let name = document.getElementById('name');
let surname = document.getElementById('surname');
let phone = document.getElementById('phone');
let mail = document.getElementById('mail');


name.onblur = function (){
    let label = document.getElementById('warnName');

    if(this.value===""){
        label.innerHTML = "nezadané meno"
        label.style.visibility = 'visible';
    }else {
        label.style.visibility = 'hidden';
    }
}

surname.onblur = function (){
    let label = document.getElementById('warnSurname');

    if(this.value===""){
        label.innerHTML = "nezadané priezvisko"
        label.style.visibility = 'visible';
    }else {
        label.style.visibility = 'hidden';
    }
}

phone.onblur = function (){
    let label = document.getElementById('warnPhone');

    if(this.value===""){
        label.innerHTML = "nezadané tel. číslo"
        label.style.visibility = 'visible';
    }else if((this.value.charAt(0)!=='+') || (this.value.length<12 || this.value.length>13)){
        label.innerHTML = "nesprávny formát tel. čísla"
        label.style.visibility = 'visible';
    }else {
        label.style.visibility = 'hidden';
    }
}

mail.onblur = function (){
    let label = document.getElementById('warnMail');

    if(this.value===""){
        label.innerHTML = "nezadaný email"
        label.style.visibility = 'visible';

    }else {
        let arr = this.value.split("@");
        let domains = arr[1].split(".");

        console.log(domains);
        console.log(domains[domains.length-1].length)

        if(arr[0].length<3){
            label.innerHTML = "maly pocet znakov pred @";
            label.style.visibility = 'visible';
        }else if(domains.length<2){
            label.innerHTML = "maly pocet domen";
            label.style.visibility = 'visible';
        }else if(domains[domains.length-1].length<2 || domains[domains.length-1].length>4){
            label.innerHTML = "nespravny format vrcholovej domeny";
            label.style.visibility = 'visible';
        }else {
            label.style.visibility = 'hidden';
        }

    }
}