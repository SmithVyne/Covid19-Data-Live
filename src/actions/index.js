import { getAllCountries } from '../utilities';

export default data => ({
  type: 'ADD_DATA',
  data: getAllCountries(data),
});
