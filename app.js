// Node Packages needed for this application
const inquirer = require('inquirer'); //npm inquirer package
const fs = require('fs'); //file system
const generateMarkdown = require('./utils/generateMarkdown.js');



// Array of questions for user input
const questions = [
    // Name of the project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('Enter a title to continue!');
                return false;
            }
        }
    },
    // Project description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project?',
        validate: your_description => {
            if (your_description) {
                return true;
            } else {
                console.log('Enter a project description!');
                return false;
            }
        }
    },

    // Installation of this project
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project?',
        validate: your_installation => {
            if (your_installation) {
                return true;
            } else {
                console.log('Enter a project installation steps!');
                return false;
            }
        }
    },
    // Usage of this project 
    {
        type: 'input',
        name: 'usage',
        message: 'How do we use the project?',
        validate: your_usage => {
            if (your_usage) {
                return true;
            } else {
                console.log('Enter information on how to use the project');
                return false;
            }
        }
    },

    // Licensing available
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license that will best suit your project.',
        choices: ['MPL', 'GNU', 'Apache', 'MIT', 'None of the above'],
        validate: your_licence => {
            if (your_licence) {
                return true;
            } else {
                console.log('Select a license for the project');
                return false;
            }
        }
    },

    // Contributors for the code
    {
        type: 'input',
        name: 'contribution',
        message: 'How can user contribut to this project',
        validate: your_contribution => {
            if (your_contribution) {
                return true;
            } else {
                console.log('Provide information on how to contribute to this project');
                return false;
            }
        }
    },
    // Test Instructions
    {
        type: 'input',
        name: 'test',
        message: 'How does the user test this project',
        validate: your_test => {
            if (your_test) {
                return true;
            } else {
                console.log('Explain how to test this project');
                return false;
            }
        }
    },

    // Github Username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username (Required)',
        validate: github_input => {
            if (github_input) {
                return true;
            } else {
                console.log('Please enter your GitHub username');
                return false;
            }
        }
    },
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email for those who may have any questions about the generator?',
        validate: email_Input => {
            if (email_Input) {
                return true;
            } else {
                console.log('Please enter your email');
                return false;
            }
        }
    },
];

// function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Sucess! You can now preview your README file");
    });
};

//function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README.md", generateMarkdown(userInput));
        });
};

// Function call to initialize app
init();
