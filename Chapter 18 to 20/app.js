//--------------------------------------------------------------------------------------------------- Chapter 18 to 20 -------------------------------------------------------------------------------------------//

var courses = [];
var edit = [];

var matchFound = false;

var course1 = prompt("Enter course 1", "computer");
courses.push(course1);

var course2 = prompt("Enter course 2", "english");
courses.push(course2);

var course3 = prompt("Enter course 3", "physics");
courses.push(course3);

var course4 = prompt("Enter course 4", "math");
courses.push(course4);

var course5 = prompt("Enter course 5", "chemistry");
courses.push(course5);

console.log(courses);

for(var i=0;i<courses.length;i++){
    if(courses[i]){
        courses[i] = prompt("Edit course", courses[i]); 
            edit.push(courses[i]);
            console.log(edit)
    }
}