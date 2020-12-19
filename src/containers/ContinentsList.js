import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Continent from '../components/Continent';
import { getContinentsData } from '../utilities/sorting';

const ContinentsList = ({ data }) => (
  <>
    {
      data.map(continent => <Continent key={continent.continent} continent={continent} />)
    }
  </>
);

ContinentsList.propTypes = {
  data: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  const data = getContinentsData(state.data);
  return { data };
};

export default connect(
  mapStateToProps,
  null,
)(ContinentsList);
