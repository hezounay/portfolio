var pElements = document.querySelectorAll("body")[0];
var burger = document.querySelectorAll(".burger")[0];
var lien = document.querySelectorAll(".menu li");


for(var i = 0, listeLiens = lien.length; i < listeLiens; i++) {
    lien[i].onclick = function () {
            pElements.classList.toggle("menuOuvert");
        }
}

burger.onclick = function() {
    pElements.classList.toggle("menuOuvert");
};

   




  