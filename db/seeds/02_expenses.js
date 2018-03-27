
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('expenses').del()
    /*(.then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
{employee_id: "", id: "", employee: "", date: "", category: "", description: "", preTaxAmount: 0, taxName: "", taxAmount: 0},
{employee_id: "", id: "", employee: "", date: "", category: "", description: "", preTaxAmount: 0, taxName: "", taxAmount: 0},
{employee_id: "", id: "", employee: "", date: "", category: "", description: "", preTaxAmount: 0, taxName: "", taxAmount: 0}
{employee_id: "1", id: "", employee: "", date: "", category: "", description: "", preTaxAmount: 0, taxName: "", taxAmount: 0}
{ id: "1", employee: "", date: "", category: "", description: "", preTaxAmount: 0, taxName: "", taxAmount: 0}
{employee_id: 1, id: "", employee: "", date: "", category: "", description: "", preTaxAmount: 0, taxName: "", taxAmount: 0}
{ id: 1, employee: "", date: "", category: "", description: "", preTaxAmount: 0, taxName: "", taxAmount: 0}
      ]);
    })*/;
};
