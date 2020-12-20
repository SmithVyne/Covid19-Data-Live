import PropTypes from 'prop-types';
import numeral from 'numeral';

const Country = ({ background, country }) => {
  const {
    country: name, confirmed, recovered, deaths,
  } = country;

  return (
    <div style={{ background }} className="country">
      <h3>{name}</h3>
      <div>
        <span>{`${numeral(confirmed).format('0,0')} C`}</span>
        <span>{`${numeral(recovered).format('0,0')} R`}</span>
        <span>{`${numeral(deaths).format('0,0')} D`}</span>
      </div>
    </div>
  );
};

Country.propTypes = {
  background: PropTypes.string.isRequired,
  country: PropTypes.object.isRequired,
};

export default Country;
