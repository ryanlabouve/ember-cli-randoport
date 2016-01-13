# Ember-cli-randoport

Run multiple ember projects at the same time and tired of radomly picking ports
that sound good? `ember-cli-randoport` is here to help.

`ember install ember-cli-randoport` will assign a new random port for your ember
project, between 4000 and 4999.

Want to re-run? `ember g ember-cli-randoport`


## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

The easiest way to run this project is to use `npm link`.

1. Run `npm link` in the root of `ember-cli-randoport`
2. Go to any ember application and run `npm link ember-cli-randoports`.
3. Ever time you want to test out changes, run `ember g ember-cli-randoports`

## Running Tests

To run:
* `npm test` 

Note: Using tape here to unit test the core parts of this addon instead of the usu qunit stuff.
