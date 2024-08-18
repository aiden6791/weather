export interface WeatherDetails {
    publishingOffice: string;
    reportDatatime: string;
    timeSeries: [
        {
            timeDefines: string[];
            areas: [
                {
                    area: {
                        name: string;
                        code: string;
                    };
                    temps: string[];
                    weathers: string[];
                    winds: string[];
                    waves: string[];
                }
            ];
        }
    ];
}
