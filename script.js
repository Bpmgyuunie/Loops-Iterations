
let age = prompt("Please enter your age:");
if (age >= 25) {
	alert("You are 25 years old or older.");
} else {
	alert("You are younger than 25.");
}

let number = prompt("Please enter a number:");
if (number < 100) {
	alert("The number you entered is less than 100.");
} else {
	alert("The number you entered is 100 or greater.");
}

for (let i = 0; i <= 30; i++) {
	console.log(i);
}

for (let i = 40; i >= 0; i -= 2) {
	if (i % 3 === 0) {
		console.log(i);
	}
}

