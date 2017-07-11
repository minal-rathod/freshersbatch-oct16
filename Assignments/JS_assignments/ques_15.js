function myFunction() {
    var str=document.getElementById("string").value;
    str.replace(/\str+/g, " ").replace(/^\str|\str$/g, "");
	document.write(str);
}