import express from "express";
import Routes from "./routes.ts";

const server = express();
const port = 3000;

server
	.get("/", (_req, res) => {
		res.send(Routes.home());
	})
	.get("/hello", (_req, res) => {
		res.send(Routes.hello());
	})
	.get("/api/names", (_req, res) => {
		// only send a resolved response, not the pending promise
		Routes.names().then(response => res.send(response));
	})
	.get("/weather/:zipcode", (req, res) => {
		res.send(Routes.weather({ zipcode: req.params.zipcode }));
	});

server.listen(port, () => {
	console.log(`Listening on port ${port}`);
	console.log(`→ http://localhost:${port}`);
	console.log(`→ http://localhost:${port}/hello`);
	console.log(`→ http://localhost:${port}/api/names`);
	console.log(`→ http://localhost:${port}/weather/12345`);
	console.log(); // blank line for personal formatting
});
