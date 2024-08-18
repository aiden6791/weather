class WeatherData {
    constructor(
        public name: string,
        public code: string,
        public weather: string[],
        public winds: string[],
        public waves: string[]
    ) {}
}

export default WeatherData;
