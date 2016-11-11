var http = require('http');

var server = http.createServer(function(request, response) {
  response.setHeader('Content-Type', 'text/html');
  response.statusCode = 200;
  response.write("blabla");
  response.end();
}).listen(8011);
