import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Country from '../components/Country';
import { filterByContinentname } from '../utilities/sorting';
import '../styles/CountriesList.css';

const colorPicker = index => {
  const mod = (index + 1) % 4;
  if ((mod === 1) || (mod === 0)) {
    return '#d31860';
  }

  return '#ec4c8a';
};

const CountriesList = ({ match, data, fdata }) => {
  if (match) {
    const { continent: name } = match.params;
    const continent = filterByContinentname(data, name);
    return (
      <div id="countriesList">
        {continent.map((country, index) => (
          <Country
            background={colorPicker(index)}
            key={country.country}
            country={country}
          />
        ))}
      </div>
    );
  }
  if (fdata) {
    return (
      <div id="countriesList">
        {fdata.map((country, index) => (
          <Country background={colorPicker(index)} key={country.country} country={country} />
        ))}
      </div>
    );
  }

  return (
    <div id="countriesList">
      {data.map((country, index) => (
        <Country background={colorPicker(index)} key={country.country} country={country} />
      ))}
    </div>
  );
};

CountriesList.defaultProps = {
  match: null,
  fdata: null,
};

CountriesList.propTypes = {
  match: PropTypes.object,
  data: PropTypes.array.isRequired,
  fdata: PropTypes.array,
};

const mapStateToProps = ({ data }) => ({ data });

export default connect(
  mapStateToProps,
  null,
)(CountriesList);
