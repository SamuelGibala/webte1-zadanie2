let gender = document.getElementsByName("gender");

function showGender (){
    for(let i = 0;i<gender.length;i++){
    if(gender[i].checked)
        return gender[i].value;
    }
}

function showLocation (){

}

function makeSum(element){

    element.innerHTML = "Meno: &nbsp" + name.value + "<br>" +
                        "Priezvisko: &nbsp" + surname.value + "<br>" +
                        "Pohlavie: &nbsp" + showGender()  + "<br>" +
                        "Vek: &nbsp" + age.value + "<br>" +
                        "Tel. číslo: &nbsp" + phone.value + "<br>" +
                        "Email: &nbsp" + mail.value + "<br>";

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