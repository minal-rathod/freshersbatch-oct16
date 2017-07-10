function check_vowel()
{
	var character= document.getElementById("char").value;
	if(character=='a' || character=='e' || character=='i' || character=='o' || character=='u')
	{
	document.write("Character '"+character+"' is a vowel.");
	}
	else{
	document.write("Character '"+character+"' is not a vowel.");
	}
}	