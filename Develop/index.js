// TODO: Include packages needed for this application
//inquirer for collecting user input and fs for writing to file system
//generateMarkdown file as new text to write file
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
        {
    type: 'input',
    name: 'Your-Project-Title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Provide a short description explaining what your project does',
  },
  {
    type: 'input',
    name: 'Table of Contents',
    message: 'If your README is long, add a table of contents',
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'What are the steps required to install your project?',
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Provide instructions and examples for use of your project',
  },
  {
    type: 'input',
    name: 'License',
    message: 'Choose License Type Used',
    choices: ["The MIT License", "Mozilla Public License 2.0", "GNU GPL v3"
    ]
  },
  {
    type: 'input',
    name: 'Contributing',
    message: 'Can other developers contribute to your project',
    choices: ["Yes", "No"]
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'Are there tests for your project?',
  },
    {
        type: 'input',
        name: 'Questions',
        message: 'How can questions be submitted about your project?',
    },
]);
};   

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, JSON.stringify(data), function(err) {
        if (err) {
        console.log(err);
    } else console.log ("You have successfully wrote in README.md");
})
}
// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then(function(data) {
    writeToFile("README.md", generateMarkdown(data));
})
}

// Function call to initialize app
init();
