var add = function(number1, number2){
  return number1 + number2;
};

var subtract = function(number1, number2){
  return number1 - number2;
};

var multipy = function(number1, number2){
  return number1 * number2;
};

var divide = function(number1, number2){
  return number1 / number2;
};

var number1 = parseInt(prompt("Give me a number"));
var number2 = parseInt(prompt("Give me another number"));
var result = ("Those two numbers added together give you " + add(number1, number2));
alert(result);
