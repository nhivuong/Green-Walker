var originAutocomplete = "york+u";
var destinationAutocomplete = "vaughan+station";

var mode1 = "walking";
var mode2 = "driving";
var mode3 = "transit";

var link1 = "https://maps.googleapis.com/maps/api/directions/json?key=AIzaSyDSFkJ2rqIsyeLid-d1WDqh76CKBxO9gyc&origin=" + originAutocomplete + "&destination=" + destinationAutocomplete + "&mode=" + mode1;
var link2 = "https://maps.googleapis.com/maps/api/directions/json?key=AIzaSyDSFkJ2rqIsyeLid-d1WDqh76CKBxO9gyc&origin=" + originAutocomplete + "&destination=" + destinationAutocomplete + "&mode=" + mode2;
var link3 = "https://maps.googleapis.com/maps/api/directions/json?key=AIzaSyDSFkJ2rqIsyeLid-d1WDqh76CKBxO9gyc&origin=" + originAutocomplete + "&destination=" + destinationAutocomplete + "&mode=" + mode3;

function readTextFile(link, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.open('GET', link, true);
    rawFile.onload = function ()  {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
        else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = `Gah, it's not working!`;
            app.appendChild(errorMessage);
        }
    }
    rawFile.send(null);
}

readTextFile(link1, function(text){
    var data = JSON.parse(text);
    var distance = data.routes[0].legs[0].distance.value;
    var duration = data.routes[0].legs[0].duration.value;
    console.log(duration); 

});

readTextFile(link2, function(text){
    var data = JSON.parse(text);
    var distance = data.routes[0].legs[0].distance.value;
    var duration = data.routes[0].legs[0].duration.value;
    console.log(duration); 

});

readTextFile(link3, function(text){
    var data = JSON.parse(text);
    var distance = data.routes[0].legs[0].distance.value;
    var duration = data.routes[0].legs[0].duration.value;
    console.log(duration); 

});
