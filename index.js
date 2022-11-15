// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")

function getPrompt(){
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your Project",
      name: "Title",
    },
    {
      type: "input",
      message: "What does the project do?",
      name: "Discription",
    },
    {
      type: "input",
      message: "How is the instulationg done?",
      name: "Instructions",
    },
    {
        type: "input",
        message: "How do you use the applicatin?",
        name: "Usage",
      },
      {
        type: "input",
        message: "How can you contribute to this project?",
        name: "Contribute",
      },
      {
        type: "input",
        message: "How do you test this application?",
        name: "Testing",
      },
      {
        type: "checkbox",
        name: "license",
        message:"What kind of license should your project have?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
            },
  ])
  .then((response) => {
   // console.log(response,"response");
    const markdown =generateREADME(response);
    fs.writeFile('README.MD', markdown, (err) =>
    err ? console.log(err) : console.log('Successfully created README.MD!')
  );
})};

// TODO: Create an array of questions for user input
const generateREADME =({Title, Discription, Instulation, Usage, Contribute, Testing,license}) =>
`# ${Title} 

## Discription 
${Discription}

## Instulation
${Instulation}

## Usage
${Usage}

## Contribute
${Contribute}

## Testing
${Testing}

## License
${license}

`

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
//function init() {
//   getPrompt()
//   .then(readmeData => {
//     console.log(readmeData);
//     return generateMarkdown(readmeData);
// })
// .then(pageMD => {
//     return writeFile(pageMD);
// })
// .then(writeFileResponse => {
//     console.log(writeFileResponse.message);
// })
// .catch(err => {
//     console.log(err);
// })
// }

// Function call to initialize app
getPrompt();

