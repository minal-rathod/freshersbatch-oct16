function cal_age()
{
	var current_age= prompt("Please enter your age:",">0");
	current_year=2017;
	if(current_age>0)
	{
		var birth_year= current_year - current_age;
		document.write("Birth-year is ",birth_year);
	}
	else
	{
		document.write("Current age is invalid");
	}
}