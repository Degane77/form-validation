function validateForm() {
    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const date = document.getElementById('date').value.trim();

    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const dateError = document.getElementById('dateError');

    // Clear previous errors
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    dateError.textContent = '';

    let isValid = true;

    // Validate full name (no numbers allowed)
    if (!/^[a-zA-Z\s]+$/.test(fullName)) {
        nameError.textContent = 'Full name should only contain letters.';
        isValid = false;
    }

    // Validate email (must start with a letter, followed by valid email structure)
    const emailPattern = /^[a-zA-Z][^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Email must start with a letter and follow a valid structure.';
        isValid = false;
    }

    // Validate password (minimum 7 characters, 1 uppercase, 1 lowercase, 1 number)
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{7,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = 'Password must be at least 7 characters, with uppercase, lowercase, and a number.';
        isValid = false;
    }

    // Validate date
    if (date === '') {
        dateError.textContent = 'Please select a date.';
        isValid = false;
    }

    // Final validation
    if (isValid) {
        alert('Form submitted successfully!');
    }
}
