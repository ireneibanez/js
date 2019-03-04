export function AgeValidator(){}
AgeValidator.validate = function(value){
    if (value < 0 || value > 200) {
        return false
    }
    return true;
}