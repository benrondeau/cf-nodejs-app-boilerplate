// Dependencies
const   express = require ('express'),
        cfenv = require('cfenv'),
        appEnv = cfenv.getAppEnv();

// Load .env if local
if(appEnv.isLocal){require('dotenv').load();}

// Express Config
const app = express();
app.use(express.static(__dirname + '/public'));

// Startup Server
app.listen(appEnv.port, appEnv.bind, ()=> {
	console.log("Node server running on " + appEnv.url);
});
