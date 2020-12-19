import PropTypes from 'prop-types';

const Country = ({ country }) => {
  const {
    country: name, confirmed, recovered, deaths,
  } = country;

  return (
    <div>
      <span>{name}</span>
      <span>{confirmed}</span>
      <span>{recovered}</span>
      <span>{deaths}</span>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.object.isRequired,
};

export default Country;
