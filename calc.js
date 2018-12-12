// Variables

var number = document.getElementsByClassName("buttonNum");
var operator = document.getElementsByClassName("operator");
var equals = document.getElementsByClassName("equals");
var clear = document.getElementsByClassName("buttonClear");
var equation = "";
var screen = document.getElementById("screen");

// Functions

function numberClick() {
  equation += this.innerHTML;
  screen.innerHTML = equation;
}

function operatorClick() {
  equation += this.innerHTML;
  screen.innerHTML = equation;
}

function equalsClick() {
  var result = eval(equation);
  screen.innerHTML = result;
}

function clearClick() {
  equation = "";
  screen.innerHTML = "Sparta Calculator";
}

// Events

for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", numberClick);
}

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", operatorClick);
}

for (var i = 0; i < equals.length; i++) {
  equals[i].addEventListener("click", equalsClick);
}

for (var i = 0; i < clear.length; i++) {
  clear[i].addEventListener("click", clearClick);
}
