const fs = require('fs');
const path = require('path');

const defaultConfig = {
  directories: ['components', 'pages', 'app', 'api', 'styles', 'utils', 'hooks', 'constants', 'services', 'types', 'models'],
  ignoreFiles: ['.ico', '.png', '.jpg', '.jpeg', '.gif', '.svg'],
};

const createCodeContext = (projectDir = process.cwd(), config = {}) => {
  const { directories, ignoreFiles, outputFileName } = { ...defaultConfig, ...config };

  if (!outputFileName) {
    throw new Error("Project directory and output file name must be specified.");
  }

  const outputFile = path.join(projectDir, outputFileName);

  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
  }
  // console.log("Using configuration:", { directories, ignoreFiles, outputFileName });


 
  const readFiles = (directory) => {
    const entries = fs.readdirSync(directory);

    for (const entry of entries) {
      const entryPath = path.join(directory, entry);
      const entryStat = fs.statSync(entryPath);

      if (entryStat.isDirectory()) {
        readFiles(entryPath);
      } else if (entryStat.isFile()) {
        const shouldIgnore = ignoreFiles.some(ext => entry.endsWith(ext));

        if (!shouldIgnore) {
          const relativePath = path.relative(projectDir, entryPath);
          fs.appendFileSync(outputFile, `// File: ${relativePath}\n`);
          fs.appendFileSync(outputFile, fs.readFileSync(entryPath, 'utf8'));
          fs.appendFileSync(outputFile, '\n');
        }
      }
    }
  };

  for (const dir of directories) {
    const fullDirPath = path.join(projectDir, dir);
    if (fs.existsSync(fullDirPath)) {
      readFiles(fullDirPath);
    }
  }
 const green = '\x1b[32m';
 const red = '\x1b[31m';
 const reset = '\x1b[0m';
 const bold = '\x1b[1m';
 
 console.log(`${red}${bold}Code context has been written to ${green}${outputFile}${reset}`);
};

module.exports = createCodeContext;
