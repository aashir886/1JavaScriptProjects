const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// All Functions
// Function to show error
function showError (input,message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small');
    small .innerText = message;
}

// Function to show success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Functio to check if email is valid
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// This is an avent listener for the form on submit
form.addEventListener('submit',function(e) {
    e.preventDefault();
    
    
    if ( username.value === '' ) {
        showError(username,'username is required')
    }else {
        showSuccess(username);
    }

   

    if ( email.value === '' ) {
        showError(email,'email is required');
    } else if (!isValidEmail(email)) {
        showError(email,'Email is invalid')
    }else {
        showSuccess(email);
    }
    


    if ( password.value === '' ) {
        showError(password,'password is required')
    }else {
        showSuccess(password);
    }

    if ( password2.value === '' ) {
        showError(password2,'confirm password is required')
    }else {
        showSuccess(password2);
    }
})