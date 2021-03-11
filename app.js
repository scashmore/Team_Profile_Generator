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
//const { createReadStream } = require("node:fs");
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
        type: "list",
        message: "Which type of team member would you like to add?",
        choices: [
            "Engineer",
            "Intern",
            "I don't want to add more team members"
        ],
        name: "choice"
    }
    ])
        .then(function choice(responce) {
            switch (responce.choice) {
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
            const newIntern = new Intern(responce.name, responce.id, responce.email, responce.school);
            team.push(newIntern);
            addTeamMembers();
        });
};

function makeTeam() {
    fs.writeFileSync("./team.html", render(team), 'UTF-8');
};

getManager();