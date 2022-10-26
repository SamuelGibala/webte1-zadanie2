function show(name){
    document.getElementById(name).style.display = 'block';
}

function hide(name){
    document.getElementById(name).style.display = 'none';
    options.forEach(function (element){element.checked = false})
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


options[2].onchange = function (){
    if(this.checked){
        show('differentTextArea');
    }else{
        hide('differentTextArea');
    }
}


