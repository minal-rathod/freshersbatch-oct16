//empty object
var emptyObject = Object.create(Object.prototype);
// object with default properties
var Bank_accnt = {
		accNo: 098765432154,
		accBal: 67590987,
		accName : "Minal Rathod"
		}
		
Bank_accnt.prototype.withdraw= function(amt){
	bank_accnt.accBal= parseInt(bank_accnt.accBal)-parseInt(amt);
	  document.write("<br>");
	  document.write("withdaw funtion called</br>",bank_accnt.accBal);
}


Bank_accnt.prototype.deposit= funtion(amt){
	bank_accnt.accBal= parseInt(bank_accnt.accBal)-parseInt(amt);
	  document.write("<br>");
	  document.write("withdaw funtion called</br>",bank_accnt.accBal);
}


// object creation
var bank_accnt = Object.create(Bank_accnt);

//modify 
bank_accnt.accNo=624634;
bank_accnt.accBal=256237;
bank_accnt.accName= "Neha Rathod";


function test_account()
{
	  bank_accnt.withdraw(2000);
	  bank_accnt.deposit(3000);
	  document.write("<br>test called<br>");
	  document.write(bank_accnt.accNo);
}