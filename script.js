let form = document.querySelector('#form');
let name = document.querySelector('#username');
let email = document.querySelector('#email');
let pass = document.querySelector('#pass');
let pass_repeat = document.querySelector('#pass_repeat');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkData();

});

function checkData() {
    let nameValue = name.value.trim();
    let emailValue = email.value.trim();
    let passValue = pass.value.trim();
    let confirmValue = pass_repeat.value.trim();

    if (nameValue === '') {
        showError(name, 'Username can not be empty');

    } else {
        showSuccess(name)
    }

    if (emailValue === '') {
        showError(email, 'This field can not be empty');

    } else {
        showSuccess(email)
    }
    if (passValue === '') {
        showError(pass, 'This field can not be empty');

    } else {
        showSuccess(pass)
    }

    if (confirmValue === '') {
        showError(confirm, 'This field can not be empty');

    } else {
        showSuccess(pass)
    }
    if (passValue != confirmValue) {
        showError(pass_repeat, 'passwords not match');

    } else {
        showSuccess(pass_repeat)
    }



}

function showError(input, message) {
    let field = input.parentElement;
    let small = field.querySelector('small');
    small.innerText = message;
    field.className = 'field error';
}

function showSuccess(input) {
    let field = input.parentElement;
    field.className = 'field success';
}