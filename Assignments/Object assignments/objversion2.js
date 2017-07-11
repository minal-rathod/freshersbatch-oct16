var emptyObject = new Object();
function BankAccount(accNo,accbal,accName)
{
  this.accNo = accNo;
  this.accbal = accbal;
  this.accName = accName;
  this.withdraw =function(amt){
	  bank_account.accbal= parseInt(bank_account.accbal)-parseInt(amt);
	  document.write("<br>");
	  document.write("withdaw funtion called</br>",bank_account.accbal);
  };
  this.deposit = function(amt){
	  bank_account.accbal= parseInt(bank_account.accbal)+parseInt(amt);
	  document.write("<br>");
	  document.write("deposit called</br>",bank_account.accbal);
  };

  }

var  bank_account= new BankAccount(0987253,6543,"Rathod");


function test_account()
{
	  bank_account.withdraw(2000);
	  bank_account.deposit(3000);
	  document.write("<br>test called<br>");
	  document.write(bank_account.accNo);
}