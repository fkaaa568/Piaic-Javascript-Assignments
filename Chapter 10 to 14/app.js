//-----------------------------------------------------------------------------------------------------Chapter 10 To 14 ------------------------------------------------------------------------------------------------//

//Make a Calculator

var firstValue = parseInt(prompt("Write your first value"));
var secondValue = parseInt(prompt("Write your second value"));
var sign = prompt("Write your sign");

if(sign === "+"){
    alert( firstValue +"+"+secondValue +" = "+ parseInt(firstValue+secondValue));
}
else if(sign === "-"){
    alert( firstValue +"-"+secondValue +" = "+ parseInt(firstValue-secondValue));
}
else if(sign === "*"){
    alert( firstValue +"*"+secondValue +" = "+ parseInt(firstValue*secondValue));
}
else if(sign === "/"){
    alert( firstValue +"/"+secondValue +" = "+ parseInt(firstValue/secondValue));
}

else if(sign === "%"){
    alert( firstValue +"%"+secondValue +" = "+ parseInt(firstValue%secondValue));
}
else(
    alert("Please enter some values")
)


//Make a Percentage Calculator

var totalMarks = 500;
var English = parseInt(prompt("Write the marks of english"));
var Maths = parseInt(prompt("Write the marks of Maths"));
var Urdu = parseInt(prompt("Write the marks of Urdu"));
var Islamiat = parseInt(prompt("Write the marks of Islamiat"))
var Computer = parseInt(prompt("Write the marks of Computer"));
var obtainedMarks = English + Maths+Urdu+Islamiat+Computer;
var calculatePercentage = obtainedMarks*100/500;
alert("Your Percentage is "+calculatePercentage);


