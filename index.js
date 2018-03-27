let express = require('express');
let port = process.env.PORT || 3002;
let app = express();
let knex = require('./db/knex');

app.get('/expenses', function(req, res) {
	knex.raw('select * from expenses').then(function(expenses) {
		raw.send(expenses);
	})
});

app.listen(port, function () {
	console.log('listening on port ', port);
});