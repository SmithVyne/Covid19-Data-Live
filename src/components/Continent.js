import PropTypes from 'prop-types';

const Continent = ({ continent }) => {
  const {
    continent: name, confirmed, recovered, deaths,
  } = continent;

  return (
    <div>
      <span>{name}</span>
      <span>{confirmed}</span>
      <span>{recovered}</span>
      <span>{deaths}</span>
    </div>
  );
};

Continent.propTypes = {
  continent: PropTypes.object.isRequired,
};

export default Continent;
