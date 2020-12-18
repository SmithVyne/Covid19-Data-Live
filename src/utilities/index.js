export const getAllCountries = data => {
  let countries = Object.values(data);

  countries = countries.map(
    ({
      All: {
        confirmed, recovered, country, continent, deaths,
      },
    }) => ({
      country, continent, confirmed, recovered, deaths,
    }),
  );

  return countries.filter(country => country.continent);
};

export const sumCountryData = countries => countries.reduce((result, obj) => ({
  continent: obj.continent,
  confirmed: result.confirmed + obj.confirmed,
  recovered: result.recovered + obj.confirmed,
  deaths: result.deaths + obj.deaths,
}), { confirmed: 0, recovered: 0, deaths: 0 });
