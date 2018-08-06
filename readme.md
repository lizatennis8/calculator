var add = function(number1, number2){
  return number1 + number2;
};

var subtract = function(number1, number2){
  return number1 - number2;
};

var multiply = function(number1, number2){
  return number1 * number2;
};

var divide = function(number1, number2){
  return number1 / number2;
};

var bmi = function(weight, height){
  return (weight / height) / height;
};

var temperatureCtoF= function(celcius){
  return celcius * 1.8 +32;
};

var celcius = parseInt(prompt("Temp in celcius"));
alert("The temp in Fahrenheight is " + temperatureCtoF(celcius));
