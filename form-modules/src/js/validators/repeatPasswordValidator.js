export function checkPassword(passwordInput){
    
    function RepeatPasswordValidator(){}

    RepeatPasswordValidator.validate = function (value){
        if (passwordInput.el.value !== value) {
            return false;
        }
        return true;
    }

    return RepeatPasswordValidator;
}