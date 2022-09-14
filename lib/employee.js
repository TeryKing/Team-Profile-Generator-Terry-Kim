class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    };
//a constructor to return name, id, role, and email for any employee
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee";
    }
}

module.exports = Employee;