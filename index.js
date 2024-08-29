// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title of project',
      message: 'Provide a title for your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What is the installation process for your project?',
    },
    {
      type: 'input',
      name: 'usuage',
      message: 'What is the usage of your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Provide the license you are using?',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Are there any contributors to your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What tests are you running?',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Any questions?',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ]);
inquirer
.prompt(questions)
.then((response) => {
    const md = ``;
       
    
    fs.writeFile('README1.md', md, (err) => {
        if (err) {
            console.error('Error writing file');
        
         } else {
                console.log('README1.md');
            }
        })
    })
     .catch((err) => {
        console.error(err);
    });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
