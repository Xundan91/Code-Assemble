<h1>Code-Assemble</h1>

## Description

code-assemble is a Node.js package designed to aggregate code from various directories within a project into a single output file. It is especially useful for creating a comprehensive view of your project's codebase, which can aid in Easy Copy, seamless Integration with Claude and GPT ,debugging, analysis, and documentation.

## Install Global 

```
npm install -g code-assemble
```
## Install Locally

```
npm install code-assemble
```

## Make config File In project directory

```
const createCodeContext = require('code-assemble');
const path = require('path');

createCodeContext(process.cwd(), {
    //user can add Directory by there choice
  directories: ['components', 'models,], //optional

  //user can ignore the file for Faster exceution
  
  ignoreFiles: ['.png', '.svg'],        //optional
  outputFileName: 'code_context.txt'    //Mandetory
});

```

## 1.How to Execute to get Assembled code




# By Bash 

```
code-assemble <projectDir> configFile>

// Expected Output

Code context has been written to <projectDir><configFilePath>outputFileName.txt

```

## By Node Command

```
node <configFile>

// Expected Output

Code context has been written to <projectDir><configFilePath>outputFileName.txt


```
## Why Aggregating Code is Important

1 .Faster Debugging:

- Aggregating all code into a single file can simplify the process of identifying and fixing bugs. When all code is in one place, you can quickly search for issues and resolve them without having to navigate through multiple files.

2.Faster Analysis:

- Having a consolidated view of the codebase enables faster analysis. This is especially useful for understanding code structure, dependencies, and interactions between different parts of the project.

3 .Enhanced Documentation:

- By aggregating code, you can create comprehensive documentation for your codebase. This can be valuable for onboarding new developers or for generating reports and documentation for stakeholders.

4.Improved Code Review:

- With all code in one place, code reviews become more straightforward. Reviewers can examine the entire codebase from a single document, making it easier to provide feedback and ensure code quality.

5.Integration with AI Tools:

- Aggregated code can be used with AI tools like ChatGPT and Claude to generate insights, provide code suggestions, and automate documentation. AI tools can analyze the entire codebase more effectively when it is consolidated.

6.Consistency in Analysis:

- Aggregating code helps ensure that all parts of the project are considered during analysis. This reduces the risk of missing important sections of code and provides a more accurate understanding of the codebase.

7.Streamlined Code Management:

- Managing and organizing code becomes easier when it is aggregated. It simplifies tasks such as refactoring, updating, and maintaining code, leading to more efficient development workflows.

## Extra/Optional Arguments

<table>
  <tr>
    <th>S.no </th>
    <th>Name</th>
<!--     <th>Type</th> -->
<!--     <th>How it Works</th> -->
  </tr>
  <tr>
    <td>1</td>
    <td>By Creating config.js file</td>
    
  </tr>
  <tr>
    <td>2</td>
    <td>By Directly In Cli</td>
   
  </tr>
</table>

## Contributors Details

<table>
  <tr>
    <th>S.no </th>
    <th>Name</th>
    <th>Contact Info</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Kundan Kumar</td>
    <td>kundansingh023230@gmail.com</td>
  </tr>
</table>

## License

ISC
