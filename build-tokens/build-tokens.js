'use strict';
var myArgs = process.argv.slice(2);
const input = require(`./${myArgs[0]}`)

const fs = require('fs');

let output = JSON.stringify(input, null, 2);
fs.writeFileSync(`${myArgs[1]}.json`, output);