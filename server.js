import express from "express";
import { Home, Hello, APINames } from "./routes.js";

const server = express();
const port = 3000;

server.get("/", Home).get("/hello", Hello).get("/api/names", APINames);

server.listen(port, () => {
	console.log(`Listening on port ${port}`);
	console.log(`→ http://localhost:${port}`);
	console.log(`→ http://localhost:${port}/hello`);
	console.log(`→ http://localhost:${port}/api/names`);
	console.log(); // blank line for personal formatting
});
