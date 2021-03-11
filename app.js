// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { createReadStream } = require("node:fs");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const team = [];

function getManager() {
    inquirer.prompt([
        {
            message: "Enter the manager's name",
            name: "name"
        },

        {
            message: "Enter the manager's id",
            name: "id"
        },

        {
            message: "Enter the manager's email",
            name: "email"
        },

        {
            message: "Enter the manager's office number",
            name: "officeNumber"
        }
    ])
        .then(function managerPush(responce) {
            const newManager = new Manager(responce.name, responce.id, responce.email, responce.officeNumber);
            team.push(newManager);
            addTeamMembers();
        });
};

function addTeamMembers() {
    inquirer.prompt([{
        message: "Which type of team member would you like to add?",
        choices: [
            "Engineer",
            "Intern",
            "I don't want to add more team members"
        ],
        name: "choice"
    }
    ])
        .then(function choice(chosen) {
            switch (chosen.choices) {
                case "Engineer":
                    addEngin();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "I don't want to add more team members":
                    makeTeam();
                    break;
            }
        });
};

function addEngin() {
    inquirer.prompt([{
        message: "Enter the engineer's name",
        name: "name"
    },

    {
        message: "Enter the engineer's id",
        name: "id"
    },

    {
        message: "Enter the engineer's email",
        name: "email"
    },

    {
        message: "Enter the engineer's GitHub",
        name: "github"
    },
    ])
        .then(function enginPush(responce) {
            const newEngineer = new Engineer(responce.name, responce.id, responce.email, responce.github);
            team.push(newEngineer);
            addTeamMembers();
        });
};

function addIntern() {
    inquirer.prompt([{
        message: "Enter the intern's name",
        name: "name"
    },

    {
        message: "Enter the intern's id",
        name: "id"
    },

    {
        message: "Enter the intern's email",
        name: "email"
    },

    {
        message: "Enter the intern's school",
        name: "school"
    }
    ])
        .then(function internPush(responce) {
            const newIntern = new Intern(responce.name, responce.id, responce.email, responce.github);
            team.push(newIntern);
            addTeamMembers();
        });
};



// function init() {
//     mainHtml();
//     addTeamMembers();
// }

// function addTeamMembers() {
//     inquirer.prompt(
//         [
//             {
//                 message: "Enter the team manager's name",
//                 name: "name"
//             },

//             {
//                 message: "Enter the manager's id",
//                 name: "id"
//             },

//             {
//                 message: "Enter the manager's email",
//                 name: "email"
//             },

//             {
//                 message: "Enter the manager's office number",
//                 name: "officeNumber"
//             }
//         ]
//     )
//         .then(inquirer.prompt(
//             [
//                 {
//                     message: "Which tyle of team member would you like to add?",
//                     choices: [
//                         "Engineer",
//                         "Intern",
//                         "I don't want to add more team members"
//                     ],
//                     name: "choice"
//                 }
//             ]
//         )
//             .then(function ({ role }) {
//                 if (choice === "Engineer") {
//                     inquirer.prompt(
//                         [
//                             {
//                                 message: "Enter the engineer's name",
//                                 name: "name"
//                             },

//                             {
//                                 message: "Enter the engineer's id",
//                                 name: "id"
//                             },

//                             {
//                                 message: "Enter the engineer's email",
//                                 name: "email"
//                             },

//                             {
//                                 message: "Enter the engineer's GitHub",
//                                 name: "github"
//                             }
//                         ]
//                     )
//                 }
//                 else if (choice === "Intern") {
//                     inquirer.prompt(
//                         [
//                             {
//                                 message: "Enter the intern's name",
//                                 name: "name"
//                             },

//                             {
//                                 message: "Enter the intern's id",
//                                 name: "id"
//                             },

//                             {
//                                 message: "Enter the intern's email",
//                                 name: "email"
//                             },

//                             {
//                                 message: "Enter the intern's school",
//                                 name: "school"
//                             }
//                         ]
//                     )
//                 }
//                 else {
//                     console.log("You have added all your team members!")
//                 }
//             })
//         )
// }


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
