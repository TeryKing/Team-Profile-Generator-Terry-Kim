const inquirer = require("inquirer"); //this and jest alone, took nearly 15 minutes to push to git.
const fs = require("fs");
const reqEmployee = require("./lib/employee");
const reqManager = require("./lib/manager");
const reqEngineer = require("./lib/engineer");
const reqIntern = require("./lib/intern");
let Engineers = [];
let Interns = [];
let Managers = [];

const newEmployeeQuestions = [
    {
        type: "confirm",
        message: "Would you like to add a new employee?",
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
        name:"name",
        
    },
    {
        type: "input",
        message: "Please enter Manager's id",
        name:"id",
        
    },    
    {
        type: "input",
        message: "Please enter Manager's email",
        name:"email",
        
    },    
    {
        type: "input",
        message: "Please enter Manager's phone number",
        name:"phonenumber",
        
    },
]

const engineerquestion = [
    {
        type: "input",
        message: "Please enter Engineer's name.",
        name: "name",
    },
    {
        type:"input",
        message: "Enter Engineer's ID",
        name: "id",
    },
    {
        type: "input",
        message: "Please enter Engineer's email.",
        name: "email",
    },
    {
        type: "input",
        message:"Please enter Engineer's GitHub",
        name:"github",
    }
]

const interquestion = [
    {
        type: "input",
        message: "Please enter Intern's name.",
        name: "name",
    },
    {
        type: "input",
        message: "Please enter Intern's id",
        name: "id",
    },
    {
        type: "input",
        message: "Please enter Intern's email.",
        name: "email",
    },
    {
        type: "input",
        message: "Please enter Intern's school.",
        name: "school",
    }
]

function initManager(){
    inquirer.prompt(managerQuestions)
    .then((managerQuestions)=>{
        Managers.push(new reqManager(managerQuestions.name, managerQuestions.id, managerQuestions.email, managerQuestions.phonenumber));
        addNewMem();
    })
    .catch((err) => {
        console.log(err);
    })
}

function addNewMem(){
    inquirer.prompt(newEmployeeQuestions)
    .then((newEmployeeAnswers)=>{
       if(newEmployeeAnswers.newEmployee){
        switch(newEmployeeAnswers.role){
            case "Engineer":
            addEngineer()
            break;

            case "Intern":
                addIntern();
                break;
        }
       }
       else{
        build();
       }
    })
    .catch((err) => {
        console.log(err);
    })
}

function addEngineer(){
    inquirer.prompt(engineerquestion)
    .then((engineerquestion)=>{
        Engineers.push(new reqEngineer(engineerquestion.name, engineerquestion.id, engineerquestion.email, engineerquestion.github));
        addNewMem();
})
.catch((err) => {
    console.log(err)
});
};


function addIntern(){
    inquirer.prompt(interquestion)
    .then((interquestion) => {
        Interns.push(new reqIntern(interquestion.name, interquestion.id, interquestion.email, interquestion.school))
        addNewMem();
    })
    .catch((err) => {
        console.log(err);
    })

}

initManager();

function build(){
    fs.writeFileSync("index.html", gt(Managers,Engineers,Interns));
    console.log("Success!")
}