/*jshint node:true*/
const chalk = require('chalk');
const say = chalk.bold.blue;



module.exports = {
  description: 'Randomize the port ember cli users to boot',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    console.log(say('Randomizing port!'));
    console.log(__dirname);

  }
};
