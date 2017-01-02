function Calculator(skinName) {
  this.skin = skinName;
};

Calculator.prototype.pingPong = function(input){
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

exports.calculatorModule = Calculator;
