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
        message: 'Would you like others to contribute? If yes type "## **Contribute**" then hit enter, if no then leave blank.',
      },
      {
        type: 'input',
        name: 'contributeMessage',
        message: 'If you selected yes to have others contribute, enter your stipulations here. If not, leave blank.',
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
        type: 'input',
        name: 'license',
        message: 'Add licensing.',
      },

]).then((data) => {

const readMeTemplate = `
# **${data.title}**


## **Table of Contents**
* [Installation](#installation)
* [Usage](#usage)
* [Demo](#demo)
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
![demo gif](pathway to gif goes here)
![alt text](http://url/to/img.png or link from relative pathway)

## **Installation**
${data.install}
    
## **Usage**
${data.usage}
    
## **Tests**
${data.tests}
    
## **Questions**   
####    **For any questions or inquiries please contact me at,**
* #### **Name:** ${data.name}
* #### **Email:** ${data.email}

${data.contribute}
${data.contributeMessage}
    
## **License**
${data.license}
    `
// creates name of readme
const fileName = `${data.name.toLowerCase().split(" ").join('-')}.md`;

// function to write README file
fs.writeFile(fileName, readMeTemplate, "utf8", (err) => err ? console.log(err) : console.log("success"));
});

