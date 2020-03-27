const supertest = require('supertest');
const app = require('../app');

describe("Testing the device GET API", () => {

	it("tests the base route and returns true for status", async () => {

		const response = await supertest(app).get('/');

		expect(response.status).toBe(302);
		//expect(response.body.status).toBe(true);

	});


	it("tests the get devices endpoint", async () => {

		const response = await supertest(app).get('/devices');

		expect(response.status).toBe(302);
		//expect(response.body.status).toBe('success');

	});

});