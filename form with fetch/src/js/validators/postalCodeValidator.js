export function PostalCodeValidator(){}
PostalCodeValidator.validate = function(value){
    if (!/^[0-9]{5}$/.test(value)){
        return false;
    }
    return true;
}