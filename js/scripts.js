$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    var output = pingPong(userInput);
    $("#output").text(output);
  });
});


var numbersArray = [];

var pingPong = function(input){
  var n = parseInt(input);

  for (i = 1; i <= n; i++) {
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
  return numbersArray.join(" ");
};
