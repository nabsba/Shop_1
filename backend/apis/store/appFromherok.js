var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, '../frontend/build')));
console.log(path.join(__dirname, '../frontend/build', 'path'))
app.set('port', process.env.PORT || 8080);
console.log(process.env.PORT, 'PORT')

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});