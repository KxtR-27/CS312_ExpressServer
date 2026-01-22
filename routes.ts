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

const routeNames = async () => {
	const url = "https://www.usemodernfullstack.dev/api/v1/users";
	let data;

	try {
		const response = await nodeFetch(url);
		data = (await response.json()) as namesAPIResponse[];
	} catch (error) {
		console.log(error);
		return error;
	}
	const list = data.map(user => `<li>${user.name}</li>`);
	const names = list.join("");
	return `<ul>${names}</ul>`;
};

const routeWeather = (query: WeatherQuery): WeatherDetails => queryWeatherData(query);

const queryWeatherData = (query: WeatherQuery) => {
	return {
		zipcode: query.zipcode,
		weather: "sunny",
		temp: 35,
	};
};

export { routeHome, routeHello, routeNames, routeWeather };
