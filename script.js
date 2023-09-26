document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const fullName = document.getElementById('fullName');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const fullNameError = document.getElementById('fullNameError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');

        // Regular expression for email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Validation logic
        let isValid = true;
        if (fullName.value.trim() === '') {
            fullNameError.textContent = 'Full Name is required';
            isValid = false;
        } else {
            fullNameError.textContent = '';
        }
        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = 'Invalid email format';
            isValid = false;
        } else {
            emailError.textContent = '';
        }
        if (password.value.trim().length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        if (isValid) {
            // Simulate a successful submission (you can send data to the server here)
            successMessage.textContent = 'Registration successful!';
            form.reset();
        } else {
            successMessage.textContent = '';
        }
    });
});
