exports.seed = function (knex, Promise) {
	// Deletes ALL existing entries
	return knex('employees').del()
		.then(function () {
			// Inserts seed entries
			return knex('employees').insert([
				{/*id: 1, */ name: "Patrick Stewart", address: "9245 Jane St, Maple, ON L6A 0K1"},
				{/*id: 2, */ name: "Jonathan Frakes", address: "126 Scoville Square, Toronto, ON M1V 5M1"},
				{/*id: 3, */ name: "Denise Crosby", address: "13099 Kennedy Road, Whitchurch-Stouffville, ON L4A 7X5"},
				{/*id: 4, */ name: "Brent Spiner", address: "131 Dreaney Avenue, London, ON N5Z 1W9"},
				{/*id: 5, */ name: "LeVar Burton", address: "640 Sheppard Avenue East, North York, ON M2K 1B8"},
				{/*id: 6, */ name: "Marina Sirtis", address: "2429 Dufferin Street, York, ON M6E 3S9"},
				{/*id: 7, */ name: "Wil Wheaton", address: "1039 Finch Dr, Sarnia, ON N7S 6A9"}
			]);
		});
};
