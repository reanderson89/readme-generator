// external packages
const inquirer = require("inquirer")
const fs = require("fs");

//questions for user
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'website',
        message: 'What is your website address? (include entire address)',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give a description of your application.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username? (Do not use "@" sign)',
      },
      {
        type: 'input',
        name: 'tech',
        message: 'What technology did you use?',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'What guidelines for contributing would you like?',
      },
      {
        type: 'input',
        name: 'install',
        message: 'Add instructions on how to install your application.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How is your application used?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Add in tests and examples on how to run them.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose your preferred licensing.',
        choices: ['MIT','Apache 2.0','Mozilla Public License 2.0','The Do What the Fuck You Want to Public License']
      },

]).then((data) => {

const readMeTemplate = `
# **${data.title}**
${
    (license => { 
        if(license === "Apache 2.0") 
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        else if(license === "MIT")
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        else if(license === "Mozilla Public License 2.0")
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
        else if(license === "The Do What the Fuck You Want to Public License")
            return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
        else
            return ``
    })(data.license) 
}

## **Table of Contents**
* [Contributors](#contributors)
* [Demo](#demo)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)
    
## **Live Link**
${data.website}
    
## **Description**
${data.description}
    
 ## **Contributors**
* [${data.name}](https://github.com/${data.github})
<!--- (Delete these or add more as needed)-->
* [Enter other teammate](https://github.com/their-GitHub-Username)
    
* [Enter other teammate](https://github.com/their-GitHub-Username)
    
* [Enter other teammate](https://github.com/their-GitHub-Username)

## **Technology Stack**
${data.tech}
    
## **Demo**
- ![demo gif](pathway to gif goes here)
- ![alt text](http://url/to/img.png or link from relative pathway)

## **Installation**
${data.install}
    
## **Usage**
${data.usage}
    
## **Tests**
${data.tests}
    
## **Questions**   
####    **For any questions or inquiries please contact me at,**
* #### **GitHub:** [@${data.github}](https://github.com/${data.github})
* #### **Email:** ${data.email}

## **Contribute**
${data.contribute}
  
## **License**
${data.license}
    `

// creates name of readme
const fileName = `${data.name.toLowerCase().split(" ").join('-')}.md`;

// function to write README file
fs.writeFile(fileName, readMeTemplate, "utf8", (err) => err ? console.log(err) : console.log("success"));
});

