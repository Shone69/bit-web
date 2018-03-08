var images = document.querySelectorAll('img');


for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', addRedBorder);
}

document.addEventListener('click', print);

function addRedBorder(event) {
    var node = event.target;
    node.style.border = "1px solid red"
    
    
    if (node.width !== 300) {
        event.stopPropagation();
        // images.sort(function(a,b){

        // });

        
    }
}

function print(event){
    console.log(event.target);
    
}

