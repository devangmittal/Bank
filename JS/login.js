const openAccount = () =>
{
	window.location.href = "accountOpen.html";
}

const signIn = () =>
{
	let number = document.getElementById("number").value;
	let password = document.getElementById("password").value;
	let holder = localStorage.getItem(number);
	holder = JSON.parse(holder);
	if (holder === null) {
		alert("Account no. is not valid.")
	} else {
		if (password == holder.hpass) {
			sessionStorage.setItem("actnumber", number);
			window.location.href = "transaction.html";
		} else {
			alert("Wrong Password.");
		}
	}

}

