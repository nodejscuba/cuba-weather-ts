import { request } from 'undici'
import { Municipality, MUNICIPALITIES } from './municipalities';
import { getBestDistanceByMunicipality } from './utils';
import { RED_CUBA_SOURCE } from "./redcubaLocations";

export interface RDCuba {
  data: Data;
}

export interface Data {
  cityName: string;
  dt: Dt;
  temp: number;
  pressure: number;
  humidity: number;
  iconWeather: string;
  windstring: string;
  descriptionWeather: string;
}

export interface Dt {
  date: Date;
  timezone_type: number;
  timezone: string;
}

export async function getWeatherFromRedCuba(location: String): Promise<RDCuba> {

  const {
    statusCode,
    headers,
    body
  } = await request(`https://www.redcuba.cu/api/weather_get_summary/${location}`)

  console.log('response received', statusCode)
  console.log('headers', headers)
  let result: RDCuba = await body.json()
  return result
}

export {
  Municipality, MUNICIPALITIES,
  getBestDistanceByMunicipality,
  RED_CUBA_SOURCE
}
