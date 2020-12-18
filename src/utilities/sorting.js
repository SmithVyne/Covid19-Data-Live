import { sumCountryData } from './index';

const filterByContinentname = (data, continent) => {
  const continentData = data.filter(country => country.continent === continent);
  return continentData;
};

const getContinentsData = data => {
  // const allCountries = getAllCountries(data); // Get neat data for all countries
  const allCountries = data;
  const continentsList = [];
  allCountries.forEach(country => {
    if (!continentsList.includes(country.continent)) {
      continentsList.push(country.continent);
    }
  });

  const sumOfContinents = continentsList.map(continent => {
    const countries = filterByContinentname(allCountries, continent);
    return sumCountryData(countries);
  });
  return sumOfContinents;
};

const filterByCountry = (data, countryName) => {
  data.find(({ country }) => country === countryName);
};

export { getContinentsData, filterByContinentname, filterByCountry };
