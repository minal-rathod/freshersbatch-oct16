//creating an object with properties
  
var BankAccount={
		accNo: 0987654321,
		accBal: 67590,
		accName : "Minal",
		withdraw: function(amt)
		{	
		BankAccount.accBal= BankAccount.accBal-amt;
		document.write("Cash withdrawn,balance is:"+BankAccount.accBal+"</br>");
		},
		deposit: function(amt)
		{
			BankAccount.accBal=BankAccount.accBal+amt;
		document.write("Cash deposited,balance is:",+BankAccount.accBal+"</br>");
		}
};
function test_account()
{
	  console.log(BankAccount.withdraw(2000));
	  console.log(BankAccount.deposit(3000));
}