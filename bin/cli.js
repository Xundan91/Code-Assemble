#!/usr/bin/env node
const path = require('path');
const createCodeContext = require('../lib/index');

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error("Usage: code-assemble <projectDir> <configFile>");
  process.exit(1);
}

const projectDir = path.resolve(args[0]);
const configPath = path.resolve(args[1]);

let config = {};
try {
  config = require(configPath);
} catch (error) {
  console.error(`Failed to load configuration from ${configPath}:`, error.message);
  process.exit(1);
}

if (!config.outputFileName) {
  // console.error("Output file name must be specified in the configuration file.");
  process.exit(1);
}


createCodeContext(projectDir, config);
