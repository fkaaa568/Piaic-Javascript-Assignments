//-----------------------------------------------------------------------------------------------------Chapter 15 To 17 ------------------------------------------------------------------------------------------------//

// Make a TODO

var courses = [];
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

alert(courses);

course1 = prompt("Edit first course", course1);
courses.splice(0,1,course1);

course2 = prompt("Edit first course", course2);
courses.splice(1,1,course2);

course3 = prompt("Edit first course", course3);
courses.splice(2,1,course3);

course4 = prompt("Edit first course", course4);
courses.splice(3,1,course4);

course5 = prompt("Edit first course", course5);
courses.splice(4,1,course5);

alert(courses)