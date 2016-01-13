/*jshint node:true*/

'use strict';
const path = require('path');
const newRandoPort = require('../../lib/newRandoPort');

module.exports = {
  description: 'Randomize the port ember cli users to boot',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    console.log('Randomizing port!');
    // const dotEmberCliPath = path.join(__dirname, '..', '..', '.ember-cli'); // <-- nope
    const dotEmberCliPath = path.join(this.project.root, '.ember-cli');
    newRandoPort(dotEmberCliPath);
  }
};
