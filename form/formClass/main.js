 function TextInput(id, validators) {
     this.el = document.getElementById(id);
     this.validators = validators;
 }

 TextInput.prototype.validate = function () {
     const value = this.el.value;
     console.log(value);
     for (let i = 0; i < this.validators.length; i++) {
         if (this.validators[i] === 'required') {
             if (!value) {
                 alert('Debe rellenar todos los campos requeridos');
                //  return false;
             }
         } else if (this.validators[i].startsWith('minlength')) {
             const minlength = parseInt(this.validators[i].split(':')[1]);
             if (!value || value.length < minlength) {
                 return false;
             }
         } else if (this.validators[i].startsWith('maxlength')) {
             const maxlength = parseInt(this.validators[i].split(':')[1]);
             if (!value || value.length > maxlength) {
                 return false;
             }
         } else if (this.validators[i].startsWith('regexEmail')) {
             const regexEmail = new RegExp(this.validators[i].split(':')[1]);
             if (!value || !regexEmail.test(value)) {
                 return false;
             }
         } else if (this.validators[i].startsWith('regexPostalCode')) {
             const regexPostalCode = new RegExp(this.validators[i].split(':')[1]);
             if (!value || !regexPostalCode.test(value)) {
                 return false;
             }
         } else if (this.validators[i].startsWith('regexCity')) {
             const regexCity = new RegExp(this.validators[i].split(':')[1]);
             if (!value || !regexCity.test(value)) {
                 return false;
             }
             
         } else if (this.validators[i].startsWith('regexPassword')) {
            
             const regexPassword = new RegExp(this.validators[i].split(':')[1]);
             if (!value || !regexPassword.test(value)) {
                 return false;
             }
         }
     }
     return true;
 }

 const nameInput = new TextInput('name', ['required', 'minlength:3', 'maxlength:10']);
 const surnameInput = new TextInput('surname', ['required', 'maxlength:10']);
 const ageInput = new TextInput('age', ['required']);
 const emailInput = new TextInput('email', ['required', 'regexEmail:^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$']);
 const addressInput = new TextInput('address', ['required']);
 const postalCodeInput = new TextInput('postalCode', ['required', 'regexPostalCode:^[0-9]{5}$']);
 const cityInput = new TextInput('city', ['required', 'regexCity:^[a-zA-Z]{1,}$']);
 const passwordInput = new TextInput('password', ['required', 'regexPassword:^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9!@#\\$%\\^&\\*\\?_~\\/]{8,}$']);
 const repeatInput = new TextInput('repeatPassword', ['required']);
 const typeSelect = new TextInput('type', ['required']);


 function spanError(id, msg){
    const error = document.getElementById(id);
    const span = document.createElement('span');
    const text = document.createTextNode(msg);
    span.appendChild(text);
    error.appendChild(span);
}

 function submit(event) {
     event.preventDefault();
     if (nameInput.validate() && surnameInput.validate() && ageInput.validate() && emailInput.validate() && addressInput.validate() && postalCodeInput.validate() && cityInput.validate() && typeSelect.validate() && passwordInput.validate() && repeatInput.validate()) {
         if (passwordInput.el.value === repeatInput.el.value){
         console.log('Valid form');
         }
     } else {
         console.log('Invalid form');
     }
     return false;
 }



 document.querySelector('form').onsubmit = submit;