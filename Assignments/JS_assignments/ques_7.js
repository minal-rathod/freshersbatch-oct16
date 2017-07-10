function factorial()
{
var n = document.getElementById("number").value;
var i;
var fact=1;
 for (i = 1; i <= n; i++){
    fact = fact * i;
	}
	document.write("Factorial is :",fact);
}
	
