var result;
var check = true;

while (check){
  var num_1 = parseInt(prompt("Please enter first number:"));
  var mathOperation = prompt("Please enter math operation: +, -, *, / :");
  var num_2 = parseInt(prompt("Please enter second number:"));

  if(isNaN(num_1) || isNaN(num_2)){
    alert("Enter a number")
    check = true;
  }else {
    if(mathOperation == "+"){
      result = num_1 + num_2;
      alert(result);
      check = false;
    } else if (mathOperation == "-"){
      result = num_1 - num_2;
      alert(result);
      check = false;
    } else if (mathOperation == "*"){
      result = num_1 * num_2;
      alert(result);
      check = false;
    } else if (mathOperation == "/"){
      result = num_1 / num_2;
      alert(result);  
    } else{
      alert("invalid operation")
      check = true;
    }
  }
}
