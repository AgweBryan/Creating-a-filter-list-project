// Get input element
let input = document.getElementById("search");

// Add EventListener to input
input.addEventListener("keyup", searchEngine);

// Main function
function searchEngine() {
	// Get input text/value
	let inputText = document.getElementById("search").value.toLocaleLowerCase().trim();

	// Get all contacts
	let lis = document.querySelectorAll("li");

	// Create an array from 'lis'
	let lisArr = [...lis];

	// Iterate through array 'lisArr'
	for (const i of lisArr) {
		const text = i.textContent;

		// Check if input value = a contact's name
		if (text.toLocaleLowerCase().indexOf(inputText) < 0) {
			i.style.display = "none";
		} else {
			i.style.display = "block";
		}
	}
}
