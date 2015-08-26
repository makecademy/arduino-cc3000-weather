$( document ).ready(function() {

    // Create device
    var device = new Device("arduino.local");

    // Update temperature & humidity
    device.getVariable('temperature', function(data) {
      $('#temperature').html(data.temperature + ' C');
    });

    device.getVariable('humidity', function(data) {
      $('#humidity').html(data.humidity + '%');
    });

});

