var http = require('http');
var https = require('https');

var teams = 'http://api.sportradar.us/nba-t3/games/2014/reg/schedule.json?api_key=xama6vm9k7758y5fuqfkvbw6';

http.createServer(function(req, res){
  res.writeHeader(200, {
    'Content-Tyoe': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })

http.get(teams)
  .on('response', function (xhr) {
    xhr.pipe(res);
    console.log(xhr);

  }).on('error', function(err){
    console.log(err);
  })

}).listen(5000) ? console.log("runnin") : console.log("error");


