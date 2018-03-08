var background = document.querySelector(".b");

function changeBackgroundColor(){

    background.classList.toggle("c");
}

var counter=0;
function klikovanje(){
    counter++ ;
    var z = document.querySelector(".d");
    var y = document.createElement('p');
    var content = document.createTextNode(counter + '\n');
    y.appendChild(content);
z.appendChild(y);

}