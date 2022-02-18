var app = require('./app');
var config = require('./config/config')

let port = config.app.port;
let host = config.db.host;

 
app.listen(port,host, () => console.log(`Listening on port ${host}:${port},`));
