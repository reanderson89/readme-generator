// external packages
const inquirer = require("inquirer")
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions");


const init = () => {
    inquirer.prompt(questions).then(data => {
        const fileName = `${data.name.toLowerCase().split(" ").join('-')}.md`;
        fs.writeFileSync(fileName, generateMarkdown(data));
        console.log("File has been written.")
    }).catch(error => console.log(error));
};

init();

