"use strict";
const _ = require('lodash');
const chalk = require('chalk');

/**
 * Adds port: 4XXX property to incoming json
 * @method randoport
 * @param  {Object} Current config json
 * @return {Object} Returns config plus a new and random `port` property
 */
const randoPort = function(obj) {
  const o = _.clone(obj);
  let rando = null;
  while( !rando && rando !== 4200) {
    rando = _.random(4000, 4999);
    console.log(chalk.bold.blue('New rando port!: ' + rando));
  }
  o.port = rando;
  return o;
};

module.exports = randoPort;
