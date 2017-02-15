
/* =====================
 Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
===================== */

// define parse data function
var parseData = function(data1) {
  return JSON.parse(data1);
};

// define marker function
var makeMarkers = function(data2, latitude, longitude) {
  return _.map(data2, function(crime) {
    return L.marker([crime[latitude], crime[longitude]]);
  });
};

// define plot function
var plotMarkers = function(data3) {
   _.each(data3, function(mapped) {
    mapped.addTo(map);
  });
};

// define remove markers function
var removeMarkers = function(data4) {
  _.each(data4, function(marker) {
    map.removeLayer(marker);
  });
};

// define the map
var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

/* =====================
 CODE EXECUTED HERE!
===================== */
$("#button").click(function(e) {
  urlField = $("#input1").val();
  latField = $("#input2").val();
  lonField = $("#input3").val();
  console.log(urlField, latField, lonField);
  //removeMarkers(markers);
  var downloadData = $.ajax(urlField);
  downloadData.done(function(data){
      var parsed = parseData(data);
      var markers = makeMarkers(parsed, latField, lonField);
      console.log(markers);
      plotMarkers(markers);
  });
});
