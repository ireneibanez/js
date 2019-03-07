

export function TextInput(id, validators) {
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



export class Form {
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
