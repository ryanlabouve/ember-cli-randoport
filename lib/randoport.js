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
  const blacklist = [4200];

  // add old port to blacklist, if exists
  if(obj.port) {
    blacklist.push(obj.port);
  }

  let rando;
  while( typeof rando === 'undefined' || blacklist.indexOf(rando) !== -1) {
    rando = _.random(4000, 4999);
    console.log(chalk.bold.blue('New rando port!: ' + rando));
  }
  o.port = rando;
  return o;
};

module.exports = randoPort;
