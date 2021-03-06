'use strict';

const path = require('path');
const fs = require('fs-extra');

module.exports = fs.readdirSync(__dirname)
  .filter(f => f !== 'index.js')
  .map(f => require(path.join(__dirname, f)));