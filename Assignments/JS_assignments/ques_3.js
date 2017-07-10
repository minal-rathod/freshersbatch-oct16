function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
		if(num2>0){
		document.getElementById("result").innerHTML = num1 / num2;}
		else{
			alert("Divide by zero error");
		}
}
