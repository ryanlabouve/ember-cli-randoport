"use strict";
const fs = require('fs');
const stripJsonComments = require('strip-json-comments');
const randoPort = require('./randoPort');
const chalk = require('chalk');

module.exports = function(dotEmberCliPath) {
  let currentDotEmberCli = {};
  try {
    // see if file exists
    currentDotEmberCli = JSON.parse(stripJsonComments(fs.readFileSync(dotEmberCliPath, 'utf-8')));
  } catch (err) {
    console.log(chalk.bold.red("[ember-cli-randoport] Could not read your `.ember-cli`"));
    console.log(chalk.bold.red("[ember-cli-randoport] Initializing `.ember-cli`"));
  }

  let newDotEmberCli = randoPort(currentDotEmberCli);
  try {
    fs.writeFileSync(dotEmberCliPath, JSON.stringify(newDotEmberCli));
  } catch (err) {
    console.log(chalk.bold.red("[ember-cli-randoport] Error randoport-ing"));
  }
};
