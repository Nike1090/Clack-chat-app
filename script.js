document.addEventListener('DOMContentLoaded', function() {
    
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully');
            // Form is valid, you can submit the data or perform other actions here.
            // For this example, we'll just display an alert.
            
        }
    });

    function validateForm() {
        const email = emailInput.value;
        const password = passwordInput.value;

        // Regular expressions for email and password validation
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!email.match(emailRegex)) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return false;
        }

        if (!password.match(passwordRegex)) {
            alert('Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 6 characters long.');
            passwordInput.focus();
            return false;
        }

        return true;
    }
});
