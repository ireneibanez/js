export function RequiredValidator() {}        
RequiredValidator.validate = function(value) {
    if (!value) {
        return false;
    }
    return true;
}