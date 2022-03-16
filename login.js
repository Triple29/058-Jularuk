window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin")
	form.onsubmit = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get("username");
	const password = urlParams.get("password");

	var Info_username = document.forms["myLogin"]["username"];
	var Info_password = document.forms["myLogin"]["password"];

	if(username != Info_username.value){
		alert("Your username is incorrect, please try again....");
	}
	else if(password != Info_password.value){
		alert("Your password is incorrect, please try again....");
		return false;
	}
	else{alert("Please wait a moment Logging in...")}
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}
			