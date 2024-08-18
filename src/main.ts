import axios from "axios";
import { WeatherDetails } from "./WeatherDetails";
import { TOKYO } from "./ForeCast";
import WeatherData from "./WeatherData";

export const get = async (code:string | number = TOKYO) => {

    const url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${code}.json`;

    try {
        const response = await axios.get(url);
        const result: WeatherDetails[] = response.data;
        
        const data: WeatherData[] = result.map((data) => {
            const val = data.timeSeries[0].areas[0];

            return new WeatherData(
                val.area.name,
                val.area.code,
                [val.weathers[0]],
                [val.winds[0]],
                [val.winds[0]]
            );
        });
        return data;
    } catch(error) {
        if(error instanceof Error) {
            return error;
        }
    }
};
