const inquirer = require("inquirer"); //this and jest alone, took nearly 15 minutes to push to git.
const fs = require("fs");


const Engineer = something;
const Intern = something;
const Manager = something;

const memberdata = [];

const newEmployeeQuestions = [
    {
        type: "Confirm",
        message: "Would you like to add a employee?",
        name:"newEmployee",
    },
    {
        type: "list",
        message: "What role would you like to assign this new employee",
        name:"role",
        choices: ["Engineer","Intern","None"]
    },
]

const managerQuestions = [
    {
        type: "input",
        message: "Please enter Manager's name",
        name:"name"
        
    },
    {
        type: "input",
        message: "Please enter Manager's id",
        name:"id"
        
    },    
    {
        type: "input",
        message: "Please enter Manager's email",
        name:"email"
        
    },    
    {
        type: "input",
        message: "Please enter Manager's phone number",
        name:"phonenumber"
        
    },
]