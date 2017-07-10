var min=max=a[0];
var num_elements=document.getElementById("numbers").value;
void arrmax()
{
   var i, max;
   for (i=0; i<num_elements[i]; i++)
   {
   if (a[i]>max)
   {
        max=a[i];
   }
   }
   document.write("Max of array is: ",max);
}
function arrmin()
{
   var i, min;
   for (i=0; i<num_elements[i]; i++)
   {
   if (a[i]<min)
   {
        min=a[i];
   }
   }
   document.write("Min of array is: ",min);
}

function arraver()
{ 
var sum,i,avg;
var sum=0,avg=0;

   for (i=0; i<num_elements[i];i++)
   {
     sum=sum+a[i];
     avg=sum/(i+1);
    }
	document.write("Total and Average of array is: ",sum,avg);
}