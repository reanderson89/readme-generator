// function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**
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
};

module.exports = generateMarkdown;
