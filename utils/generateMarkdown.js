// TODO: Create a function that returns a license badge based on which license is passed in
function generateMarkdown(data) {
  return `# ${data.title}
// ## License:
// [![License](https://img.shields.io/badge/License-${data.title}blue.svg)](https://shield./badge/License-${data.title}blue.svg)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Additional Info](#additional-info)

## Description:
${data.description}
## Installation:
${data.installation}
## Usage:
${data.usage}
## License:
${data.license}
## Constribution:
${data.contribution}
## Testing:
${data.testing}
## Contact information:

- Github: [${data.github}](http://github.com/${data.github})
- Email: [${data.email}](mailto:user@example.com) `;
}

// If there is no license, return an empty string
function renderLicenseBadge(license) { }


// TODO: Create a function that returns the license link

// If there is no license, return an empty string
function renderLicenseLink(license) { }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }


