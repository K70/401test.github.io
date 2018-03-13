$(document).ready(function () {
  var apiKey = 'd63a56c5ee8fd2af7c8e6ca176244b1e';

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  $('form').submit(function() {
    var city = $(this).serializeArray()[0].value;
    $.get('http://api.openweathermap.org/data/2.5/weather?q='
    + city + '&units=imperial'+ '&appid=' + apiKey, function(data) {
      console.log(data);
      var temp = data.main.temp;
      
      $('#container').append('<p> The current temperature in ' + capitalize(city) + ' is '
      + temp + ' degree Fahrenheit.');
    }, 'json');
    return false;
  });
})
