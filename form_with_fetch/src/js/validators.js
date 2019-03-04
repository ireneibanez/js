function RequiredValidator() {}
RequiredValidator.validate = function (value) {
    if (!value) {
        return false;
    }
    return true;
}

function NumberValidator() {}
NumberValidator.validate = function (value) {
    if (isNaN(value)) {
        return false;
    }
    return true;
}

function EmailValidator() {}
EmailValidator.validate = function (value) {
    if (!/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/.test(value)) {
        return false;
    }
    return true;
}

function MinLengthValidator(minLength) {
    this.minLength = minLength;
}
MinLengthValidator.prototype.validate = function (value) {
    if (value.length < this.minLength) {
        return false;
    }
    return true;
}

function createMinLength(minLength) {

    function MinLengthCustomValidator() {}

    MinLengthCustomValidator.validate = function (value) {
        if (value.length < minLength) {
            return false;
        }
        return true;
    }
    return MinLengthCustomValidator;

}

function equal(name) {
    function equalValidator() {}
    equalValidator.validate = function (value) {
        if (name.el.value !== value) {
            return false;
        }
        return true;
    }
    return equalValidator;
}

module.exports = {
    RequiredValidator,
    NumberValidator,
    equal,
    createMinLength, 
    MinLengthValidator,
    EmailValidator  
}