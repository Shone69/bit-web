$button = $("button");
$button.on("click", getIP);
$inputIP = $("input")





$ipValue = $inputIP.val();

function getIP($ipValue) {

    var newJSON = new XMLHttpRequest();
    newJSON.open("GET", "http://freegeoip.net/xml/" + $ipValue);
    newJSON.send();

    newJSON.onload = function () {
        var jsonDoc = newJSON.responseXML;
        var countryElement = jsonDoc.querySelector("CountryName");
        var countryName = countryElement.textContent;
        console.log(countryName);

        var iP = jsonDoc.querySelector("IP");
        var ipv = iP.textContent;
        console.log(ipv);
    };

}