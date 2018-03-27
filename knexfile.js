module.exports = {
	development: {
		client: 'mysql',
		connection: 'mysql://localhost/todos_test', //mysql://root:password@localhost:port/dbName
		migrations: {
			directory: __dirname + '/db/migrations',
		},
		seeds: {
			directory: __dirname + 'db/seeds',
		},
	},

};