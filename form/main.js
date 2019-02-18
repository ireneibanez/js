
function validateForm(event){
    event.preventDefault();
    validateName();
    validateSurname();
    validateAge();
    validateStreet();
    validateAddress();
    validatePostalCode();
    validateCity();
    validateEmail();
    validatePassword();
    confirmPassword();
    console.log('Todo OK');
    return false;
}

function validateName(){
    let name = document.getElementById('name').value;
    if(name && /^[a-zA-Z]{3,}$/.test(name)){
        console.log(name);
        return true;
    } else {
        spanError('errorname', 'El nombre introducido no es válido');
    }
}

function validateSurname(){
    let surname = document.getElementById('surname').value;
    if(surname && /^[a-zA-Z]{2,}$/.test(surname)){
        console.log(surname);
        return true;
    } else {
        spanError('errorsurname', 'El apellido introducido no es válido');
    }
}

function validateAge(){
    let age = document.getElementById('age').value;
    if(age && /^[0-9]{1,3}$/.test(age) && age < 201){
        console.log(age);
        return true;
    } else {
        spanError('errorage', 'La edad introducida no es válida');
    }
}


function validateStreet() {
    let street = document.getElementById('type').value;
    if(street !== 'Seleccionar'){
        console.log(street);
        return true;
    } else {
        spanError('errortype', 'El tipo de vía no es válida');
    }
}

function validateAddress(){
    let address = document.getElementById('address').value;
    if(address && /^[a-zA-Z0-9]{2,}$/.test(address)){
        console.log(address);
        return true;
    } else {
        spanError('erroraddress', 'La dirección no es válida');
    }
}

function validatePostalCode() {
    let postalCode = document.getElementById('postalCode').value;
    if(postalCode && /^[0-9]{5}$/.test(postalCode)){
        console.log(postalCode);
        return true;
    } else {
        spanError('errorpostalcode', 'El código postal introducido no es válido');
    }
}

function validateCity() {
    let city = document.getElementById('city').value;
    if(city && /^[a-zA-Z]{1,}$/.test(city)){
        console.log(city);
        return true;
    } else {
        spanError('errorcity', 'La ciudad introducida no es válido');
    }
}

function validateEmail() {
    let email = document.getElementById('email').value;
    if(email && /^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/.test(email)){
        console.log(email);
        return true;
    } else {
        spanError('erroremail', 'El email introducido no es válido');
    }
}

function validatePassword() {
    let password = document.getElementById('password').value;
    if(password && /^[a-zA-Z0-9]{8,}$/.test(password)){
        console.log(password);
        return true;
    } else {
        spanError('errorpassword', 'El password introducido no es válido');
    }
}

function confirmPassword() {
    let confirmPassword = document.getElementById('repeatPassword').value;
    if(password === confirmPassword){
        console.log(confirmPassword);
        return true;
    } else {
        spanError('errorrepeat', 'Las contraseñas deben ser iguales');
    }
}


function submit() {
    let form = document.getElementById('form');
    form.addEventListener('submit', validateForm);
}

function spanError(id, msg){
    const error = document.getElementById(id);
    const span = document.createElement('span');
    const text = document.createTextNode(msg);
    span.appendChild(text);
    error.appendChild(span);
}

window.onload = function() {
    submit();
  }