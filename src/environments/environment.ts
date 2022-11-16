// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseUrl: 'http://api.openweathermap.org/data/2.5/weather',
  XRapidAPIKeyHeader: 'weatherApi',
  XRapidAPIKeyValue: '87f86f06810f188fff7923bc2e94dc14',
	XRapidAPIHostHeader: 'X-RapidAPI-Host',
  XRapidAPIHostValue: 'open-weather-map27.p.rapidapi.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
