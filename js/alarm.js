// exports.Alarm = function(time){
  // this.time = time;
  // this.currentTime = moment().format('h:mm a');

// };

// exports.Message.prototype.read = function() {
//   return "Dear " + this.to + ", " + this.messageText + " Yours truly, " + this.from;
// };


exports.Alarm = function(time) {
  var currentTime =  moment().format('HH:mm');

    if (time === currentTime) {
      alert("wake up!");
    // } else  {
    //   output
    }
  };
  // return output;
// }
