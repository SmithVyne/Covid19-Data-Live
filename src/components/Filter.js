import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CountriesList from '../containers/CountriesList';
import Country from './Country';
import { filterByContinentname, getCountry } from '../utilities/sorting';

const Filter = ({ data, filter, category }) => {
  const filteredData = filterByContinentname(data, filter);
  const country = getCountry(data, filter);

  if ((category === 'Continent') && filteredData.length) {
    return (
      <CountriesList fdata={filteredData} />
    );
  }

  if ((category === 'Country') && country) {
    return (
      <Country country={country} />
    );
  }

  return (<Redirect to="/" />);
};

Filter.propTypes = {
  data: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

const mapStateToProps = ({ data }) => ({ data });

export default connect(
  mapStateToProps,
  null,
)(Filter);
