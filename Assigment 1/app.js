var pi = Math.PI; 
var H = parseInt(prompt("Please enter height:"));
var r = parseInt(prompt("Please enter radius:"));

var V = Math.pow(r, 2) * pi * H;

alert(V.toFixed(2));