"use strict";
const test = require('tape');
const randoPort = require('../../lib/randoport');
const _ = require('lodash');

test('empty object', t => {
  t.plan(1);

  const emptyObject = {};

  const r = randoPort(emptyObject);

  t.equal(typeof r.port, 'number');
});


test('object with other properties', t => {
  t.plan(4);

  const obj = {
    a: false,
    b: 'test',
    c: 99
  };

  const r = randoPort(obj);

  t.equal(obj.a, false);
  t.equal(obj.b, 'test');
  t.equal(obj.c, 99);
  t.equal(typeof r.port, 'number');
});

test('randoPort returns new object', t => {
  t.plan(1);
  const o = {};
  t.notEqual(o, randoPort(o));
});

test('object with existing port', t => {
  t.plan(5000);
  let i = 0;
  for(i; i < 5000; i +=1) {
    const o = {
      "port": _.random(4000, 4999)
    };

    t.notEqual(o.port, randoPort(o).port);
  }
});
// test('when 4200 is generated as port', t => {});
