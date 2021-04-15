// Takes input from search button and runs API's with input value. Updates local storage value with new input value
$('#airportSearch').on('click', function getAirportData(event) {

    clearCurrent();
    event.preventDefault();
  
    var airport = $('#airportName').val();
  
    localStorage.setItem('airportName', airport);
    createSearchHistory(airport);

    getAirportData(airport);
  })

  // function() to get airport data and display  on screen
function getAirportData(airport) {

    fetch('https://covid-api.thinklumo.com/data?x-api-key=07540c49f0d1491f9c386bd7c2768748&airport=' + airport)
  
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

  // for loop to display drink recipe results
//   for (var i = 0; i < drinkData.results.length; i++) {
//     var drinkResults = $("<a>", { "class": "remove-a" }).text(drinkData.results[i].title);
//     var spoonList = $("<br>");
//     var spoonLink = drinkData.results[i].sourceUrl;
//     drinkResults.attr("href", spoonLink)
//     drinkResults.attr("target", "_blank")
//     $("#drink-results").append(drinkResults, spoonList);

//   }
});
};
