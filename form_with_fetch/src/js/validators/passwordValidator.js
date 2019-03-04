export function PasswordValidator(){}
PasswordValidator.validate = function(value){
    if (!/^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9!@#\\$%\\^&\\*\\?_~\\/]{8,}$/.test(value)){
        return false;
    }
    return true;
}