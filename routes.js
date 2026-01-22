var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import nodeFetch from "node-fetch";
const routeHome = () => `
    <h1>CS 312 Express Server</h1>
    <ul>
        <li><a href="/hello">Hello</a></li>
        <li><a href="/api/names">Names</a></li>
        <li><a href="/weather/12345">Weather (zipcode: 12345)</a></li>
    </ul>
`;
const routeHello = () => "Hello world!";
const routeNames = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data;
    try {
        const response = yield nodeFetch(url);
        data = (yield response.json());
    }
    catch (error) {
        console.log(error);
        return error;
    }
    const list = data.map(user => `<li>${user.name}</li>`);
    const names = list.join("");
    return `<ul>${names}</ul>`;
});
const routeWeather = (query) => queryWeatherData(query);
const queryWeatherData = (query) => {
    return {
        zipcode: query.zipcode,
        weather: "sunny",
        temp: 35,
    };
};
export { routeHome, routeHello, routeNames, routeWeather };
