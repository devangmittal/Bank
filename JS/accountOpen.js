const openAccount = () =>
{
	let name = document.getElementById("name").value;
	let number = document.getElementById("number").value;
	let pass = document.getElementById("password").value;
	let type;
	let radiobtn1 = document.getElementById("current");
	let radiobtn2 = document.getElementById("saving");
	if (radiobtn1.checked) {
		type = radiobtn1.value;
	} else {
		type = radiobtn2.value;
	}
	let holder = {
		hname: name,
		hactno: number,
		hpass: pass,
		htype: type,
		hbal: 10000,
	};
	holder = JSON.stringify(holder);
	localStorage.setItem(number, holder);
	alert("Account Created successfully.");
	window.location.href = "login.html";
}