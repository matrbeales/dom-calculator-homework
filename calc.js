var firstNumber = document.getElementsByClassName("buttonNum");
var operator = document.getElementsByClassName("operator");

function buttonClick() {
  console.log(this.innerHTML)
}


for (var i = 0; i < firstNumber.length; i++) {
  firstNumber[i].addEventListener("click", buttonClick);
}

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", buttonClick);
}
