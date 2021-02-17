//---------------------------------------------------------------------------------------------------- Chapter 31 to 34 ------------------------------------------------------------------------------------------------//

var name = prompt("Please enter your name : ");
var date = prompt(" Enter date of birth :");
var month = prompt("Enter month of birth : ");
var year = prompt(" Enter year of birth : ");
var newDate = new Date();
var hour = newDate.getHours();

if(hour >= 6 && hour<= 12){
    alert("Hello"+" " + name + " "+"Gud Morning")
}
else if(hour >= 12 && hour <= 16){
        alert("Hello"+" " + name +" "+ "Gud Afternoon")
}
else{
            alert("Hello" +" "+ name + " "+"Gud Night")
}

var DOB = "Your DOB is " + date + "/" + month + "/" + year;
alert(DOB);

var DateOfBirth = new Date("Jan 05 2002");
var DateOfBirthTime = DateOfBirth.getTime();
var newDateTime = newDate.getTime();
var DiffTime = newDateTime - DateOfBirthTime;
var totalTime = DiffTime / (1000*60*60*24*365); 

var totalTime = DiffTime / (1000*60*60*24*365); 
var totalYears = Number(totalTime.toString().slice(0,2));

var totalTimeLeft =  totalTime.toString().slice(3);

var totalTime1 = totalTimeLeft / (1000*60*60*24); 
var totalMonths = Number(totalTime1.toString().slice(0,2));

var totalTimeLeft1 = totalTime1.toString().slice(2);

var totalTime2 = totalTimeLeft1 / (1000*60*60); 
var totaldays = Number(totalTime2.toString().slice(2,4));

console.log("You are "+ totalYears +" years "+ totalMonths +" Month "+ totaldays +" Days 19 Hours 20 Minutes 25 Seconds old");

var nextDOB = new Date("January 05 , 2022");
var Dob = new Date("January 05,2021");

var ftime = nextDOB.getTime();
var stime = Dob.getTime();

var msdiff = ftime - stime;
var daysLeft = msdiff / (1000 * 60 * 60 * 24);
var fdaysLeft = daysLeft;

var timeLeftForDays = Number(daysLeft.toString().slice(2));

var hoursLeft = timeLeftForDays / (1000 * 60 * 60);
var fhoursLeft = hoursLeft.toString().slice(0, 1);

var timeLeftForMinutes = Number(hoursLeft.toString().slice(2));

var MinuteLeft = timeLeftForMinutes / (1000 * 60);
var fMinuteLeft = MinuteLeft.toString().slice(0, 1);

var timeLeftForSeconds = Number(MinuteLeft.toString().slice(1));
var fsecondLeft = timeLeftForSeconds.toString().slice(0, 2);

console.log(
  "How much time left in your next birthday? " + fdaysLeft + " days " + fhoursLeft + " hours " + fMinuteLeft + " minutes " + fsecondLeft + " seconds"
);