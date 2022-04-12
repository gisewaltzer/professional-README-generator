// Declaring all the const from inquirer: 
const inquirer = require('inquirer'); //Include packages needed for this application
const fs = require('fs'); //file system
const generateMarkdown = require('./utils/generateMarkdown.js');

// Generate the data of (Welcome and Questions) for the README
console.log("Welcome to my README generator")
console.log("Answer the following questions to generate a Professional README for your project.")

// TODO: Create an array of questions for user input
function askQs() {

inquirer
	.prompt([
		{
			type: "input",
			message: "What is the title of this project?",
			name: "title",
		},
		{
			type: "input",
			message: "Why did you build this project?",
			name: "why"
		},
		{
			type: "input",
			message: "What problem does it solve?",
			name: "solution",
		},
		{
			type: "input",
			message: "How did you install it?",
			name: "installation",
		},
		{
			type: "input",
			message: "Usage of this application?",
			name: "usage",
		},
		{
			type: "input",
			message: "Add a screenshot using ![alt text](assets/images/screenshot.png)",
			name: "screenshot",
		},
		{
			type: "input",
			message: "How can I contribute with this application?",
			name: "contribution",
		},
		{
			type: "input",
			message: "How can a user test this application?",
			name: "testing",
		},
		{
			type: "input",
			message: "Add your github so users can ask questions",
			name: "github",
		},
		{
			type: "input",
			message: "How to reach me with additional questions by email:",
			name: "email",
		},
		{
			type: "list",
			message: "Choose a license for the application?",
			name: "license",
			choices: ['Apache', 'GNU General Public License (GPL)', 'MIT', 'Open Database license (ODbL)', 'Free Art License (LAL)', 'Mozilla Public License (MPL)']
		},
	
		// TODO: Create a function to write README file
	]).then((data) => {
		console.log(data);
		fs.writeFile('README.md', generateMarkdown(data),
			error => {
				if (error) {
					console.log('Please input all the data')
				}
				console.log('Your README was generated')
			}
		)
	})
}

function init() {
	askQs()
}
init();
