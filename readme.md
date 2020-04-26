# @bemoje/is-string

Returns true if the argument is a string; false otherwise.

#### Version

<span><a href="https://npmjs.org/@bemoje/is-string" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/is-string" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/is-string" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-is-string.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/is-string" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-is-string.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/is-string" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/is-string" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-is-string/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-is-string" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/is-string
npm install --save @bemoje/is-string
npm install --save-dev @bemoje/is-string
```

## Usage

```javascript
import isString from '@bemoje/is-string'

isString('')
//=> true

isString('asd')
//=> true

isString(String('asd'))
//=> true

isString(new String('asd'))
//=> true

isString(2)
//=> false

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
#n