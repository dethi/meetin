import React from 'react';
import { connect } from 'react-redux';

import Landing from './Landing';
import Dashboard from './Dashboard';

const Home = props => (props.isLogged ? <Dashboard /> : <Landing />);

const mapStateToProps = state => {
  return {
    isLogged: state.user !== null
  };
};

export default connect(mapStateToProps)(Home);
