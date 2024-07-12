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

## By node Command

```
node <configFile>

// Expected Output

Code context has been written to <projectDir><configFilePath>outputFileName.txt


```
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
