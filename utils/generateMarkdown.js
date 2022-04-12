// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicense(license) {
  if (license === 'Apache') {
    return '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'unlicense') {
    return ''
  }
  if (license === 'GNU General Public License (GPL)') {
    return '![License: GPL 3.0](https://img.shields.io/badge/License-gpl_3.0-blue.svg)(https://opensource.org/licenses/gpl-3.0)'
  }

  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)'
  }
  if (license === 'Open Database license (ODbL)') {
    return '![License: ODbL](https://img.shields.io/badge/License-ODbL-green.svg)(https://opensource.org/licenses/ODbL-1.0)'
  }
  if (license === 'Free Art License (LAL)') {
    return '![License: LAL](https://img.shields.io/badge/License-LAL_1.3-red.svg)(https://opensource.org/licenses/LAL-1.3)'
  }
  if (license === 'Mozilla Public License (MPL)') {
    return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-green.svg)(https://opensource.org/licenses/MPL-2.0)'
  }
}
//Create a funtion to generate markedown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
- ${data.why}
- ${data.solution}

## Table of Contents
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Additional Questions](#additional-questions)

## License
- ${renderLicense(data.license)}
Refer to [https://choosealicense.com](https://choosealicense.com/),

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Testing
${data.testing}

## Additional Questions
If you have any question about the application contact me directly at: [${data.email}]
You can find more of my work at: [${data.github}](https://github.com/${data.github}/),
`;
}

module.exports = generateMarkdown;







