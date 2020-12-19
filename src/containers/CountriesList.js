import PropTypes from 'prop-types';
import Country from '../components/Country';

const CountriesList = ({ data }) => (
  <>
    {
      data.map(country => <Country key={country.country} country={country} />)
    }
  </>
);

CountriesList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CountriesList;
