var originAutocomplete = "york+u";
var destinationAutocomplete = "vaughan+station";

var mode1 = "walking";
var mode2 = "driving";
var mode3 = "transit";

var distance;
var walkDuration,driveDuration,transitDuration;

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
    var data1 = JSON.parse(text);
    distance = data.routes[0].legs[0].distance.value;
    walkDuration = data.routes[0].legs[0].duration.value;
    console.log(duration);

});

readTextFile(link2, function(text){
    var data2 = JSON.parse(text);
  //  distance = data.routes[0].legs[0].distance.value;
    driveDuration = data.routes[0].legs[0].duration.value;
    console.log(duration);

});

readTextFile(link3, function(text){
    var data3 = JSON.parse(text);
   transitDuration = data.routes[0].legs[0].duration.value;
    console.log(duration);

});


function damage_rate(distance , time , dam_rate){
	return distance*time*dam_rate;
}
function calorie_count(time){
	return time*1.5;
}
var dam_car = 1;
var dam_bus = 2*dam_car;
if (dis <= 2000){
    console.log("WuuuuuuuHuuuuuu Calorie Count for walk : " + calorie_count(walkDuration));
    console.log("Damage rate for bus : " + (damage_rate(dis, transitDuration, dam_bus ))/30);
    console.log("Damage rate for car : " + damage_rate(dis, driveDuration, dam_car) + " which is : " + damage_rate(dis, driveDuration, dam_car)/((damage_rate(dis, transitDuration, dam_bus ))/30) + " times of bus");
}
else{
    console.log("WuuuuuuuHuuuuuu Calorie Count for walk : " + calorie_count(walkDuration));
    console.log("Damage rate for bus : " + (damage_rate(dis, transitDuration, dam_bus ))/30);
    consoel.log("Damage rate for car : " + damage_rate(dis, driveDuration, dam_car) + " which is : " + damage_rate(dis, driveDuration, dam_car)/((damage_rate(dis, transitDuration, dam_bus ))/30) + " times of bus");
}
