export class NameValidation {
    constructor(name) {
        this.name = name
    }
    checkValidation() {
        let pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/gm
        let valid = pattern.test(this.name)


        return valid
    }
}
export class EmailValidation {
    constructor(email) {
        this.email = email
    }
    checkValidation() {
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm
        let valid = pattern.test(this.email)


        return valid
    }
}
export class PhoneValidation {
    constructor(phone) {
        this.phone = phone
    }
    checkValidation() {
        let pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,8}$/gm
        let valid = pattern.test(this.phone)


        return valid
    }
}
export class AgeValidation {
    constructor(age) {
        this.age = age
    }
    checkValidation() {
        let pattern = /^(1[29]|[2-9]\d)$/gm
        let valid = pattern.test(this.age)


        return valid
    }
}
export class PassWordValidation {
    constructor(passWord) {
        this.passWord = passWord
    }
    checkValidation() {
        let pattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/gm
        let valid = pattern.test(this.passWord)


        return valid
    }
}
export class RePassWordValidation {
    constructor(pattern, rePassword) {
        this.pattern = pattern
        this.rePassword = rePassword
    }
    checkValidation() {
        let valid
        if (this.pattern === this.rePassword) {
            valid = true
        } else {
            valid = false
        }


        return valid
    }
}