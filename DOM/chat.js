var dugme = document.querySelector('#sendId');
var porukaElem = document.querySelector('#poruka');
var container = document.querySelector('.container');

dugme.onclick = function send() {
    var poruka = porukaElem.value;

    if (poruka) {
        var noviP = document.createElement('p');
        noviP.textContent=poruka;
        container.appendChild(noviP);
        porukaElem.value = "";
    }
};
