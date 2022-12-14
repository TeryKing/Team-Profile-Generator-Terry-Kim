const inquirer = require("inquirer"); //this and jest alone, took nearly 15 minutes to push to git. all const that was planned on using for the node
const fs = require("fs");
const reqEmployee = require("./lib/employee");
const reqManager = require("./lib/manager");
const reqEngineer = require("./lib/engineer");
const reqIntern = require("./lib/intern");
const reqGenerate = require("./src/generate")
let Engineers = [];
let Interns = [];
let Managers = [];

//questions for node 
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
        choices: ["Engineer","Intern"]
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

//function to initialize the node which starts off with manager.
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
//function after adding the manager, function to add member
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
//adding engineer from choice prompt
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

//adding intern from choice prompt
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
//starting the node function
initManager();
//building the html.
function build(){
    fs.writeFileSync("./dist/index.html", reqGenerate(Managers,Engineers,Interns));
    console.log("Success!")
}