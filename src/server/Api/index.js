var express = require('express');
var router = express.Router();
var posts = require('../posts');

router.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  var body = '<html><head><meta charset="utf-8" /><meta content="initial-scale=1, width=device-width" name="viewport" /><title>Блог N1PhANtoM</title>		<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css"><link rel="stylesheet" href="http://s.htwdev.ru/css/layouts/blog.css"></head><body style="margin: 1.5% 3% 1.5% 3%">';
  
  for(var i=0; i<posts.length; i++)
  {
      body+=posts[i];
  }
  body+='</body></html>';
  res.status(200).send(body);
  req.Application.log.trace(`Debug = ${req.Application.config.debug}`);
});
module.exports = router;