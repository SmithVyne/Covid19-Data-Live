import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Route, Switch, Link } from 'react-router-dom';
import defaults from '../utilities/defaults';
import ADD_DATA from '../actions';
import { getContinentsData } from '../utilities/sorting';

class App extends Component {
  componentDidMount() {
    const { ADD_DATA } = this.props;

    fetch(defaults['base-url'])
      .then(response => response.json())
      .then(data => ADD_DATA(data));
  }

  render() {
    const { data } = this.props;
    // console.log(data);
    return (
      <div>
        <>
          {data.map(country => (<div key={country.continent}>{country.confirmed}</div>)) }
        </>
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.array.isRequired,
  ADD_DATA: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const data = getContinentsData(state.data);
  return { data };
};

export default connect(
  mapStateToProps,
  { ADD_DATA },
)(App);
