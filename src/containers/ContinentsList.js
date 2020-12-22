import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Continent from '../components/Continent';
import { getContinentsData } from '../utilities/sorting';

const ContinentsList = ({ data }) => (
  <div id="continentsList">
    {
      data.map((continent, index) => <Continent background={(index % 2) ? '#d31860' : '#ec4c8a'} key={continent.continent} continent={continent} />)
    }
  </div>
);

ContinentsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => {
  const data = getContinentsData(state.data);
  return { data };
};

export default connect(
  mapStateToProps,
  null,
)(ContinentsList);
