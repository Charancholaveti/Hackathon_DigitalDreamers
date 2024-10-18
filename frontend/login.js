document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get the input values
    const studentId = document.getElementById('student-id').value;
    const password = document.getElementById('password').value;

    // Clear previous error messages
    document.getElementById('studentIdError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    let isValid = true;

    // Validate Student ID (at least 10 characters)
    if (studentId.length < 10) {
        document.getElementById('studentIdError').innerText = 'Invalid ID';
        isValid = false;
    }

    // Validate Password (at least 8 characters, 1 uppercase, 1 special character)
     const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~`]).{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').innerText = 'Invalid password';
        isValid = false;
    }

    // If validation passes, redirect to the home page
    if (isValid) {
        window.location.href = "main.html"; // Redirect to home page
    }
});
