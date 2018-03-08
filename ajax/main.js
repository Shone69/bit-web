$button = $("button");
$button.on("click", getIp);



function getIp() {
    var newXHR = new XMLHttpRequest();
    newXHR.open("GET", "http://freegeoip.net/xml/www.b92.net");
    newXHR.send();
    
    newXHR.onload = function () {
            var xmlDoc = newXHR.responseXML;
            var countryElement = xmlDoc.querySelector("CountryName");
            var countryName = countryElement.textContent;
            console.log(countryName);
            
            var iP = xmlDoc.querySelector("IP");
            var ipv = iP.textContent;
            console.log(ipv);
        }
        
    }
