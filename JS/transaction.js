let holder = JSON.parse(localStorage.getItem(sessionStorage.getItem("actnumber")));
console.log(holder);
console.log(holder.hname);
const show = () =>
{
	document.getElementById("name").innerHTML = holder.hname;
	document.getElementById("actno").innerHTML = holder.hactno;
	document.getElementById("balance").innerHTML = holder.hbal;
	document.getElementById("type").innerHTML = holder.htype;
}

const deposit = () =>
{
	let amt = parseInt(document.getElementById("amt").value);
	holder.hbal = parseInt(holder.hbal) + amt;
	let key = holder.hactno;
	localStorage.setItem(key, JSON.stringify(holder));
	window.location.href = "transaction.html";

}
const withdraw = () =>
{
	let amt = parseInt(document.getElementById("amt").value);
	if (amt < holder.hbal) {
		holder.hbal = parseInt(holder.hbal) - amt;
	} else {
		alert("Insufficient Balance.");
		return;
	}
	let key = holder.hactno;
	localStorage.setItem(key, JSON.stringify(holder));
	window.location.href = "transaction.html";

}
const logout = () =>
{
	sessionStorage.removeItem("actnumber");
	window.location.href = "login.html";
}