import axios from "axios";
import { TOKYO } from "./ForeCast";
import { WeatherDetails } from "./WeatherDetails";


export const get = async (code:string | number = TOKYO) => {
  const url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${code}.json`;

  try {
    const response = await axios.get(url);
    const result: WeatherDetails[] = response.data;

    result.forEach((val) => {
      const data = val.timeSeries[0].areas[0];

      console.log(data.area.name);
      console.log(data.area.code);
      console.log(data.weathers);
      console.log(data.winds);
      console.log(data.waves);
    });
  } catch(error) {
    console.log(error);
  }
}
