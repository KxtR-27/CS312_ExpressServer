import nodeFetch from "node-fetch";
import type { RequestHandler } from "express";

export const Home: RequestHandler = (_req, res) => {
	res.send(`
        <h1>CS 312 Express Server</h1>
        <ul>
            <li><a href="/hello">Hello</a></li>
            <li><a href="/api/names">Names</a></li>
        </ul>
    `);
};

export const Hello: RequestHandler = (_req, res) => {
	res.send("Hello world!");
};

export const APINames: RequestHandler = async (_req, res) => {
	const url = "https://www.usemodernfullstack.dev/api/v1/users";

	const response = await nodeFetch(url);
	// cast as type of the intended API return
	const users = (await response.json()) as [{ name: string }];

	const names = users
		// wrap names in list items
		.map(user => `<li>${user.name}</li>`)
		// remove commas between names
		.join("");

	res.send(`<ul>${names}</ul>`);
};
