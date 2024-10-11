// Get the form elements
const NameInput = document.getElementById('Name');
const DOBInput = document.getElementById('DOB');
const submitbutton = document.getElementById('submitbutton');
const outputDiv = document.getElementById('output');

// Add event listener to the button
submitbutton.addEventListener('click', function() {
    // Get the values from the input fields
    const Name = NameInput.value;
    const  DOB = DOBInput.value;
        outputDiv.innerHTML = `<p>Name: ${Name}</p><p>Date of Birth: ${DOB}</p>`;
});
