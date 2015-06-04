var fs = require('fs')
var path = require('path')

module.exports = function (dir, extname, callback) {
  fs.readdir(dir, function (err, files){
           if (err) return callback(err)

           callback(null, files.filter(function (file) {
             return (path.extname(file).substring(1) == extname);
           }));
          
  });
};
           //}).map(function (file) {
             //path.basename(file);
