exports.up = function (knex, Promise) {
	return knex.schema.hasTable('employees').then(function (exists) {
		if (!exists) {
			console.log('table `employees` didn\'t exist');

			return knex.schema.createTable('employees', function (table) {
				table.increments();
				table.string('name').notNullable();
				table.string('address').notNullable();
				table.timestamp('created_at').defaultTo(knex.fn.now());
				table.timestamp('updated_at').defaultTo(knex.fn.now());
			})
		}
	}).then(function () {
		knex.schema.hasTable('expenses').then(function (exists) {
			if (!exists) {
				console.log('table `expenses` didn\'t exist');

				return knex.schema.createTable('expenses', function (table) {
					table.increments();
					table.timestamp('date');
					table.string('category');
					table.string('employeeName');
					table.string('employeeAddress');
					table.integer('user_id').references('id').inTable('employees');
					table.string('expenseDescription');
					table.decimal('preTaxAmount', 13, 2);
					table.string('taxName');
					table.decimal('taxAmount', 13, 2);
					table.timestamp('created_at').defaultTo(knex.fn.now());
					table.timestamp('updated_at').defaultTo(knex.fn.now());
				})

			}
		})
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTable('expenses').dropTable('employees');
};
