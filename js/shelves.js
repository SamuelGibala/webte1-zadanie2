function show(name){
    document.getElementById(name).style.display = 'block';
}

function hide(name){
    document.getElementById(name).style.display = 'none';
}

let selectedItem1 = document.getElementById('opt1');
let selectedItem2 = document.getElementById('opt2');
let selectedItem3 = document.getElementById('opt3');

selectedItem1.onchange = function (){
    hide('shelf1');
    hide('shelf2');

}

selectedItem2.onchange = function (){
    show('shelf1');
    hide('shelf2');
}

selectedItem3.onchange = function (){
    show('shelf2');
    hide('shelf1');
}

document.getElementById('different').onchange = function (){
    if(this.checked){
        show('differentText');
    }else{
        hide('differentText');
    }
}


