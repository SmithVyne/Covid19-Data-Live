import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch, Link } from 'react-router-dom';
import defaults from '../utilities/defaults';
import ADD_DATA from '../actions';
import ContinentsList from '../containers/ContinentsList';
import CountriesList from '../containers/CountriesList';
import Filter from './Filter';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
      category: '',
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  componentDidMount() {
    const { ADD_DATA } = this.props;

    fetch(defaults['base-url'])
      .then(response => response.json())
      .then(data => ADD_DATA(data));
  }

  handleFilter({ value }) {
    this.setState({ filter: value });
  }

  handleCategory({ value }) {
    // console.log(value);
    this.setState({ category: value });
  }

  render() {
    const { filter, category } = this.state;
    const { data } = this.props;
    return (
      <>
        <nav>
          <input type="text" onChange={e => this.handleFilter(e.target)} value={filter} />
          <select onChange={e => this.handleCategory(e.target)}>
            <option disabled selected>Select</option>
            <option>Continent</option>
            <option>Country</option>
          </select>
          <Link to="/filter" className="filter-btn">Filter</Link>
        </nav>

        <div>
          <Switch>
            <Route exact path="/" component={ContinentsList} />
            <Route path="/countries">
              <CountriesList data={data} />
            </Route>
            <Route path="/filter">
              <Filter filter={filter} category={category} />
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}

App.propTypes = {
  data: PropTypes.array.isRequired,
  ADD_DATA: PropTypes.func.isRequired,
};

const mapStateToProps = ({ data }) => ({ data });

export default connect(
  mapStateToProps,
  { ADD_DATA },
)(App);
