import defaults from '../utilities/defaults';

test('Tests that base-url is correct', () => {
  expect(defaults['base-url']).toEqual('https://cors-anywhere.herokuapp.com/https://covid-api.mmediagroup.fr/v1/cases');
});
