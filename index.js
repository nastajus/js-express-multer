let express = require('express');
let bodyParser = require('body-parser');
let port = process.env.PORT || 3004;
let knex = require('./db/knex');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/expenses', function(req, res) {
	knex.raw('select * from expenses').then(function(expenses) {
		raw.send(expenses);
		//element is not imported
		//referenceerror: raw is not defined
	})
});

app.listen(port, function () {
	console.log('listening on port ', port);
});