     function RequiredValidator() {}        
        RequiredValidator.validate = function(value) {
            if (!value) {
                return false;
            }
            return true;
        }

        function NumberValidator() {}
        NumberValidator.validate = function(value) {
            if (isNaN(value)) {
                return false;
            }
            return true;
        }

        function EmailValidator(){}
        EmailValidator.validate = function(value) {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return false;
            }
            return true;
        }

        function createMinLength(minLength) {

            function MinLengthCustomValidator(){}
            
            MinLengthCustomValidator.validate = function(value) {
                if (value.length < minLength) {
                    return false;
                }
                return true;
            }
            return MinLengthCustomValidator;

        }

        function AgeValidator(){}
        AgeValidator.validate = function(value){
            if (value < 0 || value > 200) {
                return false
            }
            return true;
        }
        function PostalCodeValidator(){}
        PostalCodeValidator.validate = function(value){
            if (!/^[0-9]{5}$/.test(value)){
                return false;
            }
            return true;
        }

        function PasswordValidator(){}
        PasswordValidator.validate = function(value){
            if (!/^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9!@#\\$%\\^&\\*\\?_~\\/]{8,}$/.test(value)){
                return false;
            }
            return true;
        }

        
        function checkPassword(passwordInput){
            
            function RepeatPasswordValidator(){}

            RepeatPasswordValidator.validate = function (value){
                if (passwordInput.el.value !== value) {
                    return false;
                }
                return true;
            }

            return RepeatPasswordValidator;
        }

        
        function TextInput(id, validators) {
            this.el = document.getElementById(id);
            this.validators = validators;
        }

        TextInput.prototype.validate = function () {
            const value = this.el.value;
            for (let i = 0; i < this.validators.length; i++) {
               if (!this.validators[i].validate(value)){
                   return false;
               }
            }
            return true;       
        }
        

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

        class Form {
            constructor(inputs) {
                this.inputs = inputs;
            }
            getInput(){
                const data = {};
                for (let i=0; i<this.inputs.length; i++) {
                    data[this.inputs[i].el.id] = this.inputs[i].el.value;
                }
                return data;
            }

            validateForm(){
                for (let i=0; i<this.inputs.length; i++) {
                    if (this.inputs[i].validate() === false){
                        console.log('Invalid Form');
                        return false;
                    }
                }
                console.log('Valid Form');
                return true;
            }
        }

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
