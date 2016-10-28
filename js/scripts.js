$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    var output = pingPong(userInput);

    $("#output").each(function(i) { // puts each array item on its own li
      for (var j=0; j<output.length; j++) {

        if (output[j] === "ping") {
            $("li").addClass("ping");
        }
        else if (output[j] === "pong") {
          $("li").addClass("pong");


        }
        else if (output[j] === "ping-pong") {
          $("li").addClass("ping-pong");
        }
        $(this).append('<li>' + output[j] + '</li>');

      };
    });
  });
});


var pingPong = function(input){
  var numbersArray = [];

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
  return numbersArray;
};
