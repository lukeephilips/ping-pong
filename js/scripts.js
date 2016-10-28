$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    var output = pingPong(userInput);

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


var pingPong = function(input){ //pushes either the number, ping, pong, or ping pong as appropriate.
  var numbersArray = [];

  var n = parseInt(input);

  for ( var i = 1; i <= n; i++) {
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
