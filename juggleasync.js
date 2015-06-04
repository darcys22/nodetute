var http = require('http')
const BufferList = require('bl')

var urlList = process.argv.slice(2, process.argv.length);
var responseCount = 0;
var data = [];

urlList.forEach(function (item, index) {
  http.get(item, function (req) {
    req.setEncoding('utf8')
    req.pipe(BufferList(function (error, res) {
      data[index] = res;
      responseCount++;
      if (responseCount === urlList.length) {
        console.log(data.join('\n'));
      }
    }))
  })
});
