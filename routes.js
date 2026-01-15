import nodeFetch from "node-fetch";

export const Home = (_req, res) => {
	res.send(`
        <h1>CS 312 Express Server</h1>
        <ul>
            <li><a href="/hello">Hello</a></li>
            <li><a href="/api/names">Names</a></li>
        </ul>
    `);
};

export const Hello = (_req, res) => {
	res.send("Hello world!");
};

export const APINames = async (_req, res) => {
	const url = "https://www.usemodernfullstack.dev/api/v1/users";

	const response = await nodeFetch(url);
	const data = await response.json();

	const names = data
		// wrap names in list items
		.map(user => `<li>${user.name}</li>`)
		// remove commas between names*
		.join("");

	res.send(`<ul>${names}</ul>`);
};


// *this does two things
// 1. coerces the array of list-wrapped names into a string now instead of at the `res.send()`
// 2. prevents the array-string from adding commas if it weren't coerced before `res.send()`
