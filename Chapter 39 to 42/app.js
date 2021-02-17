//---------------------------------------------------------------------------------------------------- Chapter 39 to 42 ------------------------------------------------------------------------------------------------//
var totalMarks = 500;
var English = parseInt(prompt("Write the marks of english"));
var Maths = parseInt(prompt("Write the marks of Maths"));
var Urdu = parseInt(prompt("Write the marks of Urdu"));
var Islamiat = parseInt(prompt("Write the marks of Islamiat"))
var Computer = parseInt(prompt("Write the marks of Computer"));
var obtainedMarks = English + Maths+Urdu+Islamiat+Computer;
var calculatePercentage = obtainedMarks*100/500;

switch (true) {
    case calculatePercentage >= 90:
    alert("Grade A+");
        break;

    case calculatePercentage >=75:
    alert("Grade A");
    break;

case calculatePercentage >=60:
    alert("Grade B");
    break;

    case calculatePercentage >=45:
    alert("Grade C");
    break;

        case calculatePercentage >=30:
    alert("Grade D");
    break;


        case calculatePercentage >=0:
    alert("Grade F");
    break;


    default:        
        break;
}