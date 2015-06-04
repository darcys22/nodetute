var fs = require('fs');

var doc = fs.readFileSync(process.argv[2]).toString();

console.log(doc.split('\n').length - 1);


