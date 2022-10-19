
let counterLabel=document.getElementById('diffTextCounter');

document.getElementById('differentText').addEventListener('keyup', function (e){
    let text = document.getElementById('differentText')
    counterLabel.innerHTML = text.value.length + "/50";
}, false);