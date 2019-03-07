

// import { TextInput, FormController } from './controls';

import {RequiredValidator} from './validators/requiredValidator';
import {NumberValidator} from './validators/numberValidator';
import {EmailValidator} from './validators/emailValidator';
import {createMinLength} from './validators/minLengthValidator';
import {AgeValidator} from './validators/ageValidator';
import {PostalCodeValidator} from './validators/postalCodeValidator';
import {PasswordValidator} from './validators/passwordValidator';
import {checkPassword} from './validators/repeatPasswordValidator';

import { TextInput, Form} from './controllersValidator';


const nameInput = new TextInput('name', [RequiredValidator, createMinLength(5)]);
const surnameInput = new TextInput('surname', [RequiredValidator, createMinLength(3)]);
const ageInput = new TextInput('age', [RequiredValidator, NumberValidator, AgeValidator]);
const emailInput = new TextInput('email', [RequiredValidator, EmailValidator]);
const postalCodeInput =  new TextInput('postalCode', [RequiredValidator, PostalCodeValidator]);
const addressInput =  new TextInput('address', [RequiredValidator]);
const typeInput =  new TextInput('type', [RequiredValidator]);
const cityInput = new TextInput('city', [RequiredValidator]);
const passwordInput = new TextInput('password', [RequiredValidator, PasswordValidator]);
const repeatInput = new TextInput('repeatPassword', [RequiredValidator, checkPassword(passwordInput)]);

const instanceForm = new Form([nameInput, surnameInput, ageInput, emailInput, postalCodeInput, addressInput, typeInput, cityInput, passwordInput, repeatInput]);

function submit(event) {
    event.preventDefault();
    if (instanceForm.validateForm() === true) {
        console.log(instanceForm.getInput());
    } else {
        console.log('Invalid form');
        return false;
    }
    
}



document.querySelector('form').onsubmit = submit;