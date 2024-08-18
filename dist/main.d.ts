import WeatherData from "./WeatherData";
export declare const get: (code?: string | number) => Promise<Error | WeatherData[] | undefined>;
