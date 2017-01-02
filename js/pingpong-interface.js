var Calculator = require('./../js/pingpong.js').calculatorModule;


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var simpleCalculator = new Calculator('taupe');
    var userInput = $("#userInput").val();
    var output = simpleCalculator.pingPong(userInput);

    $("#output").each(function() {// calls backend function and adds element
      $(this).empty();
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
        $(".slideDiv, .numbersDiv").show();
        };
      });
    });

  $(".slideButton").click(function () { // slide effect to remove elements
    switch ($(this).val()) {
      case "ping":
        $(".ping").hide('slide', { direction: "right"}, 1000);
        break;
      case "pong":
        $(".pong").hide('slide', {direction: "left"}, 1000);
        break;
      case "ping-pong":
        $(".ping:visible").hide('slide', {direction: "right"}, 1000);
        $(".pong:visible, .ping-pong:visible").hide('slide', {direction: "left"}, 1000);
        break;
      case "restart":
        $(".ping-pong, .ping, .pong").show();
        break;
      default:
        break;
    };
  });
});
