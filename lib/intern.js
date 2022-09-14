const Employee = require("./employee")

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);

        this.school = school;
    }
//constructor to return school name and role for interns
    getSchool(){
        return this.school
    }

    getRole(){
        return "Intern";
    }
}

module.exports = Intern;