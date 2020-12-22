import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch, Link } from 'react-router-dom';
import defaults from '../utilities/defaults';
import ADD_DATA from '../actions';
import ContinentsList from './ContinentsList';
import CountriesList from './CountriesList';
import Filter from '../components/Filter';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
      category: '',
      render: false,
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  componentDidMount() {
    const { ADD_DATA } = this.props;

    fetch(defaults['base-url'])
      .then(response => response.json())
      .then(data => ADD_DATA(data) && this.setState({ render: true }));
  }

  handleFilter({ value }) {
    this.setState({ filter: value });
  }

  handleCategory({ value }) {
    this.setState({ category: value });
  }

  render() {
    const { filter, category, render } = this.state;
    if (render) {
      return (
        <>
          <nav>
            <input id="filter-field" type="text" onChange={e => this.handleFilter(e.target)} value={filter} placeholder="Country/Continent" />
            <select id="filter-category" onChange={e => this.handleCategory(e.target)}>
              <option>Country</option>
              <option>Continent</option>
            </select>
            <Link to="/filter" id="filter-btn">Filter</Link>
          </nav>

          <main>
            <Switch>
              <Route exact path="/" component={ContinentsList} />
              <Route path="/countries/:continent" component={CountriesList} />
              <Route path="/filter">
                <Filter filter={filter} category={category} />
              </Route>
            </Switch>
          </main>
        </>
      );
    }
    return (
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
}

App.propTypes = {
  ADD_DATA: PropTypes.func.isRequired,
};

export default connect(
  null,
  { ADD_DATA },
)(App);
