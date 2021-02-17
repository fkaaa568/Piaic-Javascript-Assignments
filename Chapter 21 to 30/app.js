//--------------------------------------------------------------------------------------------------- Chapter 21 to 30 ----------------------------------------------------------------------------------------------//

//First Assignment

var num = Number(prompt("Write a number"));
var convertNum = Math.ceil(num);
console.log(convertNum);
var text = "This is my Dummy text";
var sliceText = text.slice(0,4);
console.log(sliceText);
for(var i =0; i<text.length;i++){
        if(text.slice(i,i+4) === "This"){
            text.slice(0,i) + text.slice(i+4);
         var replace =    text.replace(/This/g,"shiT");
            alert(replace);
        }
}


//Second Assignment

var inputValue = prompt("type Something")
  inputValue = inputValue.toLowerCase().split(' ');

  for (var i = 0; i < inputValue.length; i++) {
    var first =  inputValue[i].charAt(0).toUpperCase() + inputValue[i].slice(1); 
    console.log(first)
  }
