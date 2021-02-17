//---------------------------------------------------------------------------------------------------- Chapter 35 to 38 ------------------------------------------------------------------------------------------------//

function changeCase(){

var inputValue = prompt("type Something")
  inputValue = inputValue.toLowerCase().split(' ');

  for (var i = 0; i < inputValue.length; i++) {
    var first =  inputValue[i].charAt(0).toUpperCase() + inputValue[i].slice(1); 
    console.log(first)
  }
}
changeCase()

//Factorial number

        function Factorial(n) { 
            var ans=1; 
              
            for (var i = 2; i <= n; i++) 
                ans = ans * i; 
            return ans; 
        } 
        var ans = Factorial(5)
        console.log(ans);

