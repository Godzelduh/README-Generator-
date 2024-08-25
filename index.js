// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      name: 'Acceptance Criteria',
      message: 'What is the Acceptance Criteria for this application?',
    },
    {
      type: 'input',
      name: 'userstory',
      message: 'What is the User Story for this application?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What is the installation for this application?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the user for this application?',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Please provide',
    },
  ])
  .then((response) => {})
    const md = ` README-Generator
    
    ## User Story
    ${response.userstory}
    ## Acceptance Criteria
    
    ## Installation
    
    ## Usage
    
    ## Credits
    
    ## License`;


     fs.writeFile('README1.md', md, (err) => {
        if (err) {
            console.error('Error writing file');
        
         } else {
                console.log('README1.md');
            }
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
