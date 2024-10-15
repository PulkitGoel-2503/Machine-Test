// Function to validate email format using regex
/*function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

// Function to validate phone number using regex (10 digits)
function isValidPhoneNumber(phoneNumber) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phoneNumber);
}

// Function to handle form validation
function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    let isValid = true;

    // Clear all previous error messages
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.style.display = 'none');

    // First Name Validation
    const firstName = document.getElementById('firstName').value.trim();
    if (firstName === "") {
        document.getElementById('firstNameError').textContent = "First name is required.";
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
    }

    // Last Name Validation
    const lastName = document.getElementById('lastName').value.trim();
    if (lastName === "") {
        document.getElementById('lastNameError').textContent = "Last name is required.";
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    }

    // Email Validation
    const email = document.getElementById('email').value.trim();
    if (email === "") {
        document.getElementById('emailError').textContent = "Email is required.";
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email address.";
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Phone Number Validation
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    if (phoneNumber === "") {
        document.getElementById('phoneNumberError').textContent = "Phone number is required.";
        document.getElementById('phoneNumberError').style.display = 'block';
        isValid = false;
    } else if (!isValidPhoneNumber(phoneNumber)) {
        document.getElementById('phoneNumberError').textContent = "Please enter a valid 10-digit phone number.";
        document.getElementById('phoneNumberError').style.display = 'block';
        isValid = false;
    }

    // Password Validation
    const password = document.getElementById('password').value.trim();
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = "Password must be at least 8 characters.";
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // If the form is valid, log the data
    if (isValid) {
        const formData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phoneNumber,
            password: password
        };

        console.log(formData);  // Log the form data as an object
        alert("Form submitted successfully!");
        // Optionally, submit the form
        // document.getElementById('signupForm').submit();
    }
}

// Attach validateForm to form's submit event
document.getElementById('signupForm').addEventListener('submit', validateForm);*/






// Function to validate email format using regex
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

// Function to validate phone number (10 digits required)
function isValidPhoneNumber(phoneNumber) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phoneNumber);
}

// Function to handle form validation
function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting automatically

    let isValid = true;

    // Clear all previous error messages
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.style.display = 'none');

    // First Name Validation
    const firstName = document.getElementById('firstName').value.trim();
    if (firstName === "") {
        document.getElementById('firstNameError').textContent = "First name is required.";
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
    }

    // Last Name Validation
    const lastName = document.getElementById('lastName').value.trim();
    if (lastName === "") {
        document.getElementById('lastNameError').textContent = "Last name is required.";
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    }

    // Email Validation
    const email = document.getElementById('email').value.trim();
    if (email === "") {
        document.getElementById('emailError').textContent = "Email is required.";
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email address.";
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Phone Number Validation
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    if (phoneNumber === "") {
        document.getElementById('phoneNumberError').textContent = "Phone number is required.";
        document.getElementById('phoneNumberError').style.display = 'block';
        isValid = false;
    } else if (!isValidPhoneNumber(phoneNumber)) {
        document.getElementById('phoneNumberError').textContent = "Please enter a valid 10-digit phone number.";
        document.getElementById('phoneNumberError').style.display = 'block';
        isValid = false;
    }

    // Password Validation
    const password = document.getElementById('password').value.trim();
    if (password.length > 8) {
        document.getElementById('passwordError').textContent = "Password must be at least 8 characters.";
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // If the form is valid, log the form data
    if (isValid) {
        const formData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phoneNumber,
            password: password
        };

        console.log(formData); // Log the form data as an object
        alert("Form submitted successfully!");
        // Optionally, submit the form or reset fields
        // document.getElementById('signupForm').submit();
        // document.getElementById('signupForm').reset();
    }
}

// Attach validateForm to the form's submit event
document.getElementById('signupForm').addEventListener('submit', validateForm);