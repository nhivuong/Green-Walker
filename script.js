function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("test.json", function(text){
    var data = JSON.parse(text);
    var dis = data.routes[0].legs[0].distance.value;
    var duration = data.routes[0].legs[0].duration.value;
    console.log(duration);
    var time_bus=20 , time_car=15 , time_walk=40;
//distance is in meter and time is in minutes
//dam_car = damages caused by car ,constant 
//dam_bus = 2* dam_car ,Assumptions
//walk rate is slow pace , 3.5km/h
//no of users on bus is taken as 30 on an average

function damage_rate(distance , time , dam_rate){
	return distance*time*dam_rate;
}
function calorie_count(time){
	return time*1.5;
}
var dam_car = 1;
var dam_bus = 2*dam_car;
if (dis <= 2000){
    console.log("WuuuuuuuHuuuuuu Calorie Count for walk : " + calorie_count(time_walk));
    console.log("Damage rate for bus : " + (damage_rate(dis, time_bus, dam_bus ))/30);
    console.log("Damage rate for car : " + damage_rate(dis, time_car, dam_car) + " which is : " + damage_rate(dis, time_car, dam_car)/((damage_rate(dis, time_bus, dam_bus ))/30) + " times of bus"); 
}
else{
    console.log("WuuuuuuuHuuuuuu Calorie Count for walk : " + calorie_count(time_walk));
    console.log("Damage rate for bus : " + (damage_rate(dis, time_bus, dam_bus ))/30);
    consoel.log("Damage rate for car : " + damage_rate(dis, time_car, dam_car) + " which is : " + damage_rate(dis, time_car, dam_car)/((damage_rate(dis, time_bus, dam_bus ))/30) + " times of bus"); 
}

});

