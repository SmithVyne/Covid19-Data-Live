import { getAllCountries, sumCountryData } from '../../utilities';
import { filterByContinentname } from '../../utilities/sorting';
import data from '../../json/data';

describe('It tests the main utility functions', () => {
  const afga = {
    confirmed: 49161, continent: 'Asia', country: 'Afghanistan', deaths: 2011, recovered: 38475,
  };
  const afro = {
    confirmed: 2387446, continent: 'Africa', deaths: 56674, recovered: 2387446,
  };

  describe('tests the getAllCountries method', () => {
    it('returns an array of objects', () => {
      const result = getAllCountries(data);
      expect(result[0]).toBeInstanceOf(Object);
    });
    it('cleans up the data from the Api data source', () => {
      const result = getAllCountries(data);
      expect(result[0]).toEqual(afga);
    });
  });

  describe('tests the sumCountryData method', () => {
    it('returns an array of continents without country property', () => {
      const formatData = getAllCountries(data);
      const continent = filterByContinentname(formatData, 'Africa');
      const result = sumCountryData(continent);
      expect(result).toEqual(afro);
    });
  });
});
