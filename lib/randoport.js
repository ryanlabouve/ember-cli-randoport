"use strict";
const _ = require('lodash');
const chalk = require('chalk');
const portfinder = require('portfinder');
var deasync = require('deasync');

/**
 * Returns the next open port
 * @method checkPort
 * @param  {Number} port to start checking from
 * @return {Number} closest open port to one provided
 */
function checkPort(basePort, callback){
  return deasync(function(basePort, callback) {
    portfinder.basePort = basePort;
    portfinder.getPort(function (err, port) {
      callback(null, port);
    });
  })(basePort);
};

/**
 * Checks if port is in blacklist
 * @method inBlackList
 * @param  {Number} port we are checking
 * @return {Number} additional array of blocked ports
 */
function inBlackList(port, additionalPorts) {
  const blacklist = [4200].concat(additionalPorts || []);
  return blacklist.indexOf(port) === -1 ? false : true;
};

/**
 * Adds port: 4XXX property to incoming json
 * @method randoport
 * @param  {Object} Current config json
 * @return {Object} Returns config plus a new and random `port` property
 */
const randoPort = function(obj) {
  const o = _.clone(obj);

  do {
    o.port = checkPort(_.random(4000, 4999));
  } while(inBlackList(o.port, [obj.port]));

  console.log(chalk.bold.blue('New rando port!: ' + o.port));
  return o;
};

module.exports = randoPort;
