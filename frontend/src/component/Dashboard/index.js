import React, { Component } from 'react';
import NavBar from './../Navbar';
import TitleBar from './../TitleBar';

import emptyEvents from './../../img/events-empty-data-set.png';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <NavBar menuActive="home" />
        <TitleBar title="Mon actu" />
        <div className="container">
          <figure className="container has-text-centered">
            <img src={emptyEvents} alt="profile_picture" />
          </figure>
        </div>
        <p className="subtitle is-3 has-text-centered">
          Oops, vous n'avez aucun evenement..
        </p>
        <p className="subtitle is-5 has-text-centered">
          Rejoindre un evenement
        </p>
      </div>
    );
  }
}

export default Dashboard;
