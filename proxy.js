var nconf = require('nconf');
var cors_proxy = require('cors-anywhere');

nconf.file({ file: 'config.json'});

var port = nconf.get('port');
var host = nconf.get('host');

cors_proxy.createServer().listen(port, host, function() {
      console.log('Running CORS Anywhere on ' + host + ':' + port);
});
