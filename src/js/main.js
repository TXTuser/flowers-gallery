let main = document.getElementById("main");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");

one.onmouseenter = () => open(1);
two.onmouseenter = () => open(2);
three.onmouseenter = () => open(3);
four.onmouseenter = () => open(4);
five.onmouseenter = () => open(5);

function open(imgnumber) {
  main.src = "../src/img/" + imgnumber + ".png";
}
