const questions = 
[
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

];

module.exports = questions;