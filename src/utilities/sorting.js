import { sumCountryData } from './index';

const filterByContinentname = (data, continent) => {
  const continentData = data.filter(country => (
    country.continent.toLowerCase() === continent.toLowerCase()
  ));
  return continentData;
};

const getContinentsData = data => {
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

const getCountry = (data, countryName) => data.find(({ country }) => (
  country.toLowerCase() === countryName.toLowerCase()
));

export { getContinentsData, filterByContinentname, getCountry };
