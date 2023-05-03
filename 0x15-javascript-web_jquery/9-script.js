$(document).ready(function() {
  $.get('https://fourtonfish.com/hellosalut/?lang=fr', function(data) {
    var hello = data.hello;
    $('#hello').text(hello);
  });
});
