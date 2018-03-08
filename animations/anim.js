$div1 = $("#div1");

$div1.on("click", moveInterval);


// let r = 0;
// let g = 0;
// let b = 0;

var fromLeft = 0;
var fromTop = 0;
var wdt = 100;
var hgt = 100;
var r = 200;
var g = 140;
var b = 0;



    function moveInterval() {
        setInterval(move, 100);
    };

function move() {
    if (fromLeft < 100) {

        fromLeft += 1;
        fromTop += 1;
        wdt += 2;
        hgt += 2;
        r-=10;
        g+=5;
        b+=9;
        $div1.css({
            position: "relative",
            left: fromLeft + "px",
            top: fromTop + "px",
            width: wdt + "px",
            height: hgt + "px",
            background: "rgb(" + r + "," + g + "," + b + ")",
        });
    } else {
        fromLeft = -45;
        fromTop = -45;
        wdt = 100;
        hgt = 100;
        r = 255;
        g = 80;
        b = 12
        $div1.animate({
            left: "0px",
            top: "0px",
            width: wdt + "px",
            height: hgt + "px",
            background: "rgb(" + r + "," + g + "," + b + ")",

        }, 4000);
    }
}

// } else {
//     fromLeft -= 1;
//     fromTop -= 1;
//     $div1.css({
//         position: "relative",
//         left: fromLeft + "px",
//         top: fromTop + "px",
//     });
// }