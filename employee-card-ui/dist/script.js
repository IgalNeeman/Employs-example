// Show the spinner while data is being fetched
document.querySelector('.spinner-container').style.display = 'block';
// Load the JSON data (replace 'data.json' with the path to your JSON file)
fetch('employee.json')
    .then((response) => response.json())
    .then((data) => {
        // Populate the HTML elements with data
        document.getElementById('profile-photo').src = data.photoURL;
            document.getElementById('employee-name2').textContent = data.name;
        document.getElementById('employee-company').textContent = data.company;
        document.getElementById('employee-number').textContent = data.number;

    })
    .catch((error) => console.error('Error loading data:', error));
