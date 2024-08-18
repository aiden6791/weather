declare class WeatherData {
    name: string;
    code: string;
    weather: string[];
    winds: string[];
    waves: string[];
    constructor(name: string, code: string, weather: string[], winds: string[], waves: string[]);
}
export default WeatherData;
