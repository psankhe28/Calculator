//Display value
function dis(val) {
  document.getElementById("result").value += val;
}
//Evaluates and return result
function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}
function back() {
  var value = document.getElementById("result").value;
  document.getElementById("result").value = value.substr(0, value.length - 1);
}
//function that clear the display
function clr() {
  document.getElementById("result").value = "";
}
