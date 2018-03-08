var igrac = document.querySelector(".igrac");
var lopta = document.querySelector(".lopta");
var width = igrac.clientWidth;
var height = igrac.clientHeight;
var teren = document.querySelector("body");

teren.addEventListener("click", klik);
teren.addEventListener("keypress", goal);

var vertical = 0;
var horizontal = 0;

function klik(event) {
    var horizontal = event.clientX - width/2;
    vertical = event.clientY - height/2;
    igrac.style.top = vertical+"px";
    igrac.style.left = horizontal+"px";
}

function goal(event){
    var h = 1820 - horizontal;
    lopta.style.position = "fixed";
    lopta.style.left = h +"px";
    lopta.style.top = vertical + "px";
    lopta.style.transition = "left 5s";
}