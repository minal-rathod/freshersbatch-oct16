function check_prime()
{
	var number= document.getElementById("number").value;
	var i,f;
	for(i=2;i <= a/2;i++)
	{
		if(number%i == 0)
        {
            f=1;
            break;
         } 
    }
    if(f==0){
	document.write("Number '"+number+"' is a prime number.");
	}
	else{
	document.write("Number '"+number+"' is not a prime number.");
	}
}	