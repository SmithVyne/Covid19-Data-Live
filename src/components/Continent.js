import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import numeral from 'numeral';

const Continent = ({ background, continent }) => {
  const {
    continent: name, confirmed, recovered, deaths,
  } = continent;

  return (
    <Link to={`/countries/${name}`} style={{ background }} className="continent">
      <span>{name}</span>
      <div>
        <span>{`${numeral(confirmed).format('0,0')} confirmed`}</span>
        <span>{`${numeral(recovered).format('0,0')} recovered`}</span>
        <span>{`${numeral(deaths).format('0,0')} deaths`}</span>
      </div>
    </Link>
  );
};

Continent.propTypes = {
  background: PropTypes.string.isRequired,
  continent: PropTypes.object.isRequired,
};

export default Continent;
