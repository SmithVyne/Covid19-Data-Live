import { filterByContinentname, getContinentsData, getCountry } from '../utilities/sorting';
import { getAllCountries } from '../utilities';
import data from '../json/data';

describe('Tests all the sorting methods', () => {
  const afga = {
    confirmed: 49161, continent: 'Asia', country: 'Afghanistan', deaths: 2011, recovered: 38475,
  };
  const asia = {
    continent: 'Asia',
    confirmed: 19151535,
    recovered: 19151535,
    deaths: 313148,
  };

  describe('Tests the filterByContinentname method', () => {
    it('It finds and returns a single continents country list', () => {
      const continent = filterByContinentname(getAllCountries(data), 'Asia');
      expect(continent).toBeInstanceOf(Array);
      expect(continent[0]).toBeInstanceOf(Object);
      expect(continent[0]).toEqual(afga);
    });
  });

  describe('Tests the getContinentsData method', () => {
    it('It returns a list of all continents and totals of their data', () => {
      const continentsList = getContinentsData(getAllCountries(data));
      expect(continentsList).toBeInstanceOf(Array);
      expect(continentsList[0]).toBeInstanceOf(Object);
      expect(continentsList[0]).toEqual(asia);
    });
  });

  describe('Tests the getCountry method', () => {
    it('It finds and returns a single country object', () => {
      const country = getCountry(getAllCountries(data), 'Ghana');
      expect(country).toBeInstanceOf(Object);
      expect(country.continent).toEqual('Africa');
    });
  });
});
