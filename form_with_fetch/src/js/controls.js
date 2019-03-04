export function TextInput(id, validators) {
    this.el = document.getElementById(id);
    this.validators = validators;
}

TextInput.prototype.validate = function () {
    const value = this.el.value;
    for (let i = 0; i < this.validators.length; i++) {
        if (!this.validators[i].validate(value)) {
            return false;
        }
    }
    return true;

}

export class FormController {
    constructor(inputs) {
        this.inputs = inputs;
    }

    validate() {
        debugger;
        for (let i = 0; i < this.inputs.length; i++) {
            if (!this.inputs[i].validate()) {
                return false;
            }
        }
        return true;
    }

    getValue() {
        const data = {};
        for (let i = 0; i < this.inputs.length; i++) {
            const key = this.inputs[i].el.id;
            data[key] = this.inputs[i].el.value;
        }
        return data;
    }
}