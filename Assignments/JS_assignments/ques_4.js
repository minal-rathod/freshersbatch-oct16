function mult_table(){
	var num = document.getElementById("mult_number").value;
	for(i=1;i<=10;i++)
	{
		document.write("<tr><td>" + num + " x " + i + " = " + num*i + "</td></tr><br>");
	}
}
