/*****************************
Dependencies
*****************************/
const 	express = require ('express'),
		cfenv = require('cfenv'),
		appEnv = cfenv.getAppEnv();

if(appEnv.isLocal){
	require('dotenv').load(); // Load .env file into environment if app is local
}

/*****************************
Express Config
*****************************/
const app = express();
app.use(express.static(__dirname + '/public'));


/*****************************
Start Server
*****************************/
app.listen(appEnv.port, appEnv.bind, ()=> {
	console.log("Node server running on " + appEnv.url);
});
