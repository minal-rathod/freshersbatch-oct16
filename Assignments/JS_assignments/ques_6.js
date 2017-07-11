function check_prime()
{
	var low,high,i,flag;
	low = document.getElementById("num1").value;
	high = document.getElementById("num2").value;
while (low < high)
    {
        flag = 0;

        for(i = 2; i <= low/2; ++i)
        {
            if(low % i == 0)
            {
                flag = 1;
                break;
            }
        }

        if (flag == 0)
            document.write(low+"<br>");

        ++low;
    }

    return 0;
}