const Employee = require("./employee")

class Manager extends Employee{
    constructor(name, id, email, phonenumber){
        super(name, id, email);

        this.phonenumber = phonenumber
    }
//constructor to return number, id, and role for manager
    getPhonenumber(){
        return this.phonenumber
    }

    getId(){
        return this.id;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;