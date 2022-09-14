const Employee = require("./employee")

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);

        this.github = github;
    }
//constructor to return github name, and role for engineer
    getGithub(){
        return this.github
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;