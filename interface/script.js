$( document ).ready(function() {

    // Create device
    var device = new Device("arduino.local");

    // Update temperature & humidity
    device.getVariable('temperature', function(data) {

      // Update temperature display
      $('#temperature').html(data.temperature + ' C');

      // Update status as well
      if (data.connected = true) {
      	$('#status').text('Online');
      	$('#status').removeClass('red');
      	$('#status').addClass('green');
      }
    });

    // Update humidity display
    device.getVariable('humidity', function(data) {
      $('#humidity').html(data.humidity + '%');
    });

});

