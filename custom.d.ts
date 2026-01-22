// names refactored to personal preference

type namesAPIResponse = {
	id: string;
	name: string;
};

type WeatherDetails = {
	zipcode: string;
	weather: string;
	temp?: number;
};

interface WeatherQuery {
	zipcode: string;
}
