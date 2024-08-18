"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WeatherData {
    constructor(name, code, weather, winds, waves) {
        this.name = name;
        this.code = code;
        this.weather = weather;
        this.winds = winds;
        this.waves = waves;
    }
}
exports.default = WeatherData;
