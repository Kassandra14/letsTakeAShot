var testAirport = "airport=DEN";
getAirport(testAirport);

function getAirport(testAirport) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://covid-api.thinklumo.com/data" + testCity + "&APPID=07540c49f0d1491f9c386bd7c2768748", requestOptions)
        .then(response => response.text())
};