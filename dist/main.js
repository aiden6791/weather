"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const axios_1 = __importDefault(require("axios"));
const ForeCast_1 = require("./ForeCast");
const WeatherData_1 = __importDefault(require("./WeatherData"));
const get = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (code = ForeCast_1.TOKYO) {
    const url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${code}.json`;
    try {
        const response = yield axios_1.default.get(url);
        const result = response.data;
        const data = result.map((data) => {
            const val = data.timeSeries[0].areas[0];
            return new WeatherData_1.default(val.area.name, val.area.code, [val.weathers[0]], [val.winds[0]], [val.winds[0]]);
        });
        return data;
    }
    catch (error) {
        if (error instanceof Error) {
            return error;
        }
    }
});
exports.get = get;
