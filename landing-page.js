const icon = document.getElementById('Btn');

if (icon) {
	icon.addEventListener('click', () => {
		// Simple click handler: log and show a brief alert
		console.log('Btn clicked');
		alert('Button clicked');
	});
} else {
	console.warn("Element with id 'Btn' not found.");
}
