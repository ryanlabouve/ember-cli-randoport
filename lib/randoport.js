"use strict";
const _ = require('lodash');
/*
 * Adds port: 42XX property to incoming json
 * if port exits, it will change to something else rando
 *
 */
const randoPort = function(obj) {
  const o = _.clone(obj);
  let rando = null;
  while( !rando && rando !== 4200) {
    rando = _.random(4000, 4999);
    console.log('New rando port!: ' + rando);
  }
  o.port = rando;
  return o;
};

module.exports = randoPort;
