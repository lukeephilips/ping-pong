$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    var output = pingPong(userInput);

    $("#output").each(function() {

      for (var i=output.length-1; i>=0;  i--) { //adds a class to each element as it's printed
        var pingType = "";
        if (output[i] === "ping") {
          pingType = "ping";
        }
        else if (output[i] === "pong") {
          pingType = "pong";
        }
        else if (output[i] === "ping-pong") {
          pingType = "ping-pong";
        }
        $(this).prepend("<div class=\""+pingType+"\">" + output[i] + '</div>');
        $(".slideDiv").show();
        };
      });
    });

  $(".slideButton").click(function () { // slide effect
    var pingDirection = $(this).val();
    var effect = 'slide';
    var options = {};
    var duration = 1000;

    switch (pingDirection) { //determines class and slide direction of elements to remove
      case "ping":
        options = { direction: "right"};
        $(".ping").hide(effect, options, duration);
        break;
      case "pong":
        options = { direction: "left"};
        $(".pong").hide(effect, options, duration);
        break;
      case "ping-pong":
        options = { direction: "left"};
        $(".ping-pong, .ping, .pong").show();
        $(".ping-pong, .ping, .pong").hide(effect, options, duration);
        case "restart":
          $(".ping-pong, .ping, .pong").show();
          break;
      default:
        break;
    };
  });
});


var pingPong = function(input){
  var numbersArray = [];

  var n = parseInt(input);

  for (i = 1; i <= n; i++) { //pushes either the number, ping, pong, or ping pong as appropriate.
    if (i % 15 === 0) {
      numbersArray.push("ping-pong");
    }
    else if (i % 3 === 0) {
      numbersArray.push("ping");
    }
    else if (i % 5 === 0) {
      numbersArray.push("pong");
    }
    else {
      numbersArray.push(i);

    };
  };
  return numbersArray;
};
