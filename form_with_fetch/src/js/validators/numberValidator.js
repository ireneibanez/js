export function NumberValidator() {}
NumberValidator.validate = function(value) {
    if (isNaN(value)) {
        return false;
    }
    return true;
}