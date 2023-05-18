// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

const gernerateREADME = ({ github, email, title, description, installation, usage, license, contributing, tests }) =>
`# ${title}

[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})

## Description
${description}

## Table of Content
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install the neccessary dependencies, run the following command:

${installation}

## Usage
${usage}

## License
This projece is licensed under the ${license} license.

## Contributing
${contributing}

## Tests
To run tests, run the following command:

${tests}

## Questions
If you have any questions about the repo, open an issue or contact me directly at [${email}](${email}). You can find more of my work at [${github}](https://github.com/${github}).`;

// Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'github',
    message: 'What is your Github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What is the user contribution guidelines?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What command should be run to run tests?',
  },
];

// Create a function to write README file
function writeToFile(readmeContent) {
    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('README.md created successfully!')
    );
}

// Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        const readmeContent = gernerateREADME(answers);
        writeToFile(readmeContent);
  });
}

// Function call to initialize app
init();
