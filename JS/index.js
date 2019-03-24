var xhttp = new XMLHttpRequest();
var URL = "https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD";

    xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        var jsonArray = JSON.parse(this.responseText)
        for (let i = 0; i < jsonArray.data.length; i++) {
           var movieData = jsonArray.data[i];
           if(movieData[10] === "Golden Gate Bridge"){
               document.getElementById('result').innerHTML += movieData[8] + " | " + movieData[9] + " | " + movieData[12] + "<br>" + "<br>";
           }
        }
    }
};
xhttp.open("GET", URL, true);
xhttp.send();