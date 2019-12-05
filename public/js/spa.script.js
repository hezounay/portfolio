

var pElements = document.querySelectorAll("body")[0];
var burger = document.querySelectorAll("#burger")[0];
var lien = document.querySelectorAll(".menu li");
var liena = document.querySelectorAll(".menu li a");

var close = document.querySelectorAll(".ham")[0];

for(var i = 0, listeLiens = lien.length; i < listeLiens; i++) {
    lien[i].onclick = function () {
        console.log(close);
        pElements.classList.toggle("menuOuvert");
        close.classList.toggle("active");
        }
}



burger.onclick = function() {
    pElements.classList.toggle("menuOuvert");
};


$(document).ready(()=>{
    var etat=0
    $('.turn1').hover(()=>{
        if(etat==0){
            $('.turn1vid').css('opacity',1)

            $('#myvid').trigger('play')
            etat=1
        }else{
            $('.turn1vid').css('opacity',0)
            $('#myvid').trigger('pause')
            etat=0
        }
       
    })

})
$(document).ready(()=>{
    var etat=0
    $('.turn2').hover(()=>{
        if(etat==0){
            $('.turn2vid').css('opacity',1)

            $('#myvid2').trigger('play')
            etat=1
        }else{
            $('.turn2vid').css('opacity',0)
            $('#myvid2').trigger('pause')
            etat=0
        }
       
    })

})
$(document).ready(()=>{
    var etat=0
    $('.turn3').hover(()=>{
        if(etat==0){
            $('.turn3vid').css('opacity',1)

            $('#myvid3').trigger('play')
            etat=1
        }else{
            $('.turn3vid').css('opacity',0)
            $('#myvid3').trigger('pause')
            etat=0
        }
       
    })

})
$(document).ready(()=>{
    var etat=0
    $('.turn4').hover(()=>{
        if(etat==0){
            $('.turn4vid').css('opacity',1)

            $('#myvid4').trigger('play')
            etat=1
        }else{
            $('.turn4vid').css('opacity',0)
            $('#myvid4').trigger('pause')
            etat=0
        }
       
    })

})
$(document).ready(()=>{
    var etat=0
    $('.turn5').hover(()=>{
        if(etat==0){
            $('.turn5vid').css('opacity',1)

            $('#myvid5').trigger('play')
            etat=1
        }else{
            $('.turn5vid').css('opacity',0)
            $('#myvid5').trigger('pause')
            etat=0
        }
       
    })

})
$(document).ready(()=>{
    var etat=0
    $('.turn6').hover(()=>{
        if(etat==0){
            $('.turn6vid').css('opacity',1)

            $('#myvid6').trigger('play')
            etat=1
        }else{
            $('.turn6vid').css('opacity',0)
            $('#myvid6').trigger('pause')
            etat=0
        }
       
    })

})