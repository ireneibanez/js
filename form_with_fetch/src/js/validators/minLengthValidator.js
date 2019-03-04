export function createMinLength(minLength) {

    function MinLengthCustomValidator(){}
    
    MinLengthCustomValidator.validate = function(value) {
        if (value.length < minLength) {
            return false;
        }
        return true;
    }
    return MinLengthCustomValidator;

}