export function EmailValidator(){}
EmailValidator.validate = function(value) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return false;
    }
    return true;
}