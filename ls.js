var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, files){
           if (err) throw err;

           files.filter(function (file) {
             return (path.extname(file).substring(1) == process.argv[3]);
           }).forEach(function (file) {
             console.log(path.basename(file));
           });
          
});
