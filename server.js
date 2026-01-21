import express from "express";
import { routeHome, routeHello, routeNames, routeWeather } from "./routes.js";
const server = express();
const port = 3000;
server
    .get("/", (_req, res) => {
    res.send(routeHome());
})
    .get("/hello", (_req, res) => {
    res.send(routeHello());
})
    .get("/api/names", (_req, res) => {
    routeNames().then(response => res.send(response));
})
    .get("/weather/:zipcode", (req, res) => res.send(routeWeather({ zipcode: req.params.zipcode })));
server.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log(`→ http://localhost:${port}`);
    console.log(`→ http://localhost:${port}/hello`);
    console.log(`→ http://localhost:${port}/api/names`);
    console.log(`→ http://localhost:${port}/weather/12345`);
    console.log(); // blank line for personal formatting
});
