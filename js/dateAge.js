let age = document.getElementById('age');
let birthDate = document.getElementById('birthDate');

age.onblur = function (){
    let label = document.getElementById('warnAge');

    if(this.value===""){
        label.innerHTML = "nezadaný vek"
        label.style.visibility = 'visible';
    }else {
        label.style.visibility = 'hidden';
    }
}

birthDate.onblur = function (){
    let label = document.getElementById('warnBirthDate');

    if(this.value===""){
        label.innerHTML = "nezadaný dátum narodenia"
        label.style.visibility = 'visible';
    }else {
        label.style.visibility = 'hidden';
    }
}
