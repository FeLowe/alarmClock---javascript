var Alarm = require('./../js/alarm.js').Alarm;
$(document).ready(function(){
  $('#time-form').submit(function(event){
    event.preventDefault();
    var wakeUpTime = $('#time').val();
     var output = Alarm(wakeUpTime);


    $('#output').text(wakeUpTime);

  });
  $('#outputExactMoment').text(moment().format('HH:mm'));
});
