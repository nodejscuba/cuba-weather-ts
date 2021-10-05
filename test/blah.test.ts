import {
  getWeatherFromRedCuba, RDCuba,
  MUNICIPALITIES,
  getBestDistanceByMunicipality,
  RED_CUBA_SOURCE
} from '../src';

describe('cuba-weather', () => {
  it('get weather from Red Cuba', async () => {
    let locationStr = 'Guane'
    let result: RDCuba = await getWeatherFromRedCuba(locationStr)
    expect(result.data.cityName).toEqual(locationStr);
  });

  it('get weather by municipality', async () => {

    let locationStr = 'cerro'
    let municipality = MUNICIPALITIES.find(
      (municipality) => municipality.nameCured === locationStr
    )
    let bestSource = getBestDistanceByMunicipality(
      municipality,
      RED_CUBA_SOURCE
    )

    let result: RDCuba = await getWeatherFromRedCuba(bestSource.name)
    expect(result.data.cityName).toEqual(expect.not.stringMatching(""));
  });

});
