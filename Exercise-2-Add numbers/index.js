function addNumbers() {
  var num1 = document.getElementById("num1");
  var num2 = document.getElementById("num2");
  var num3 = document.getElementById("num3");
  var num4 = document.getElementById("num4");

  var sum = Number(num1.value) + Number(num2.value) + Number(num3.value) + Number(num4.value) ;

  var result = document.getElementById("result");
  result.innerHTML = sum;
}
