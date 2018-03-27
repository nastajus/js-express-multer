module.exports = {
	development: {
		client: 'mysql',
		//connection: 'mysql://localhost/todos_test', //mysql://root:password@localhost:port/dbName
		connection : {
			host: 'localhost',
			user: 'walkthroughcode_user',
			password: 'walkthroughcode_password',
			database: 'walkthroughcode_database'
		},
		migrations: {
			directory: __dirname + '/db/migrations',
		},
		seeds: {
			directory: __dirname + '/db/seeds',
		},
	},

};

//> mysql > create database walkthrough_database
//> mysql > create user 'walkthroughcode_database'@'localhost' identified by 'walkthroughcode_password'
//> mysql > grant all privileges on walkthroughcode_database.* to 'walkthroughcode_user'@'localhost' identified by 'walkthroughcode_password';

// [knex migrate:rollback]
// knex migrate:latest
// knex seed:run