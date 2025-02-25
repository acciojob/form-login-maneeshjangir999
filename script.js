let fName = document.getElementById("fn")
let lName = document.getElementById("ln")
let btn = document.querySelector("input")
function getFormvalue() {

	let firstVal = fName.value
	let lastVal = lName.value
	alert(firstVal+" "+lastVal)
	

}
btn.addEventListener("click",getFormvalue)
