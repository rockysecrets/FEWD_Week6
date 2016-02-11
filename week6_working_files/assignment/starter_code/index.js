//stores cities in an array
var city = ["NYC", "LA", "SF", "ATX", "SYD"];

// Get dropdown element from DOM
var select = document.getElementById('city-type');

// // Loop through the array
for (var i = 0; i < 5; ++i) {
  // Add new option on select
  // select.add(new Option(city[i]));
    $('select').append( new Option(city[i]));
};


function cityChange() {
  //changes city type into a value
  var currentCity = $("#city-type").val();

  if (currentCity === "NYC") {
     $("body").attr("class", "nyc");

   } else if (currentCity === "LA") {
     $("body").attr("class", "la");

   } else if (currentCity === "SF") {
     $("body").attr("class", "sf");

   } else if (currentCity === "ATX") {
     $("body").attr("class", "austin");

   } else if (currentCity === "SYD") {
     $("body").attr("class", "sydney");
 }
 };

// binding action for change of options
 $('form').change(cityChange);
