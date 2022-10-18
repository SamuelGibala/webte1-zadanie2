let age = document.getElementById('age');
let birthDate = document.getElementById('birthDate');
let labelAge = document.getElementById('warnAge');
let labelDate = document.getElementById('warnBirthDate');



age.onblur = function (){
    if(this.value===""){
        labelAge.innerHTML = "nezadaný vek"
        labelAge.style.visibility = 'visible';
    }else if(Math.trunc((new Date()-new Date(birthDate.value))/1000/3600/24/365)===(this.value*1)) {
        console.log();
        labelAge.style.visibility = 'hidden';
        labelDate.style.visibility = 'hidden';
    }else {

        labelAge.innerHTML = "vek nesúhlasí s dátumom narodenia";
        labelAge.style.visibility = 'visible';
        labelDate.innerHTML = "vek nesúhlasí s dátumom narodenia"
        labelDate.style.visibility = 'visible';

    }
}

birthDate.onblur = function (){
    if(this.value==="") {
        labelDate.innerHTML = "nezadaný dátum narodenia"
        labelDate.style.visibility = 'visible';
    }else if(Math.trunc((new Date()-new Date(birthDate.value))/1000/3600/24/365)===(age.value*1)){

        labelAge.style.visibility = 'hidden';
        labelDate.style.visibility = 'hidden';

    }else {
        labelAge.innerHTML = "vek nesúhlasí s dátumom narodenia"
        labelAge.style.visibility = 'visible';
        labelDate.innerHTML = "vek nesúhlasí s dátumom narodenia"
        labelDate.style.visibility = 'visible';
    }
}
