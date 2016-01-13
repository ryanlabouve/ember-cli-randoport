/*jshint node:true*/
'use strict';

const chalk = require('chalk');
const say = chalk.bold.blue;
const error = chalk.bold.red;
const path = require('path');
const fs = require('fs');
const stripJsonComments = require('strip-json-comments');

const randoPort = require('../../lib/randoPort');



module.exports = {
  description: 'Randomize the port ember cli users to boot',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    console.log(say('Randomizing port!'));
    // const dotEmberCliPath = path.join(__dirname, '..', '..', '.ember-cli'); // <-- nope
    const dotEmberCliPath = path.join(this.project.root, '.ember-cli');

    let currentDotEmberCli = {};
    try {
      // see if file exists
      currentDotEmberCli = JSON.parse(stripJsonComments(fs.readFileSync(dotEmberCliPath, 'utf-8')));
    } catch (err) {
      console.log(error("[ember-cli-randoport] Could not read your `.ember-cli`"));
      console.log(say("[ember-cli-randoport] Initializing `.ember-cli`"));
    }

    console.log('old', currentDotEmberCli);
    let newDotEmberCli = randoPort(currentDotEmberCli);
    try {
      fs.writeFileSync(dotEmberCliPath, JSON.stringify(newDotEmberCli));
    } catch (err) {
      console.log(error("[ember-cli-randoport] Error randoport-ing"));
    }

    console.log('new', newDotEmberCli);
  }
};
