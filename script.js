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
    var distance = data.routes[0].legs[0].distance.value;
    var duration = data.routes[0].legs[0].duration.value;
    console.log(duration);
});
