import React, { Component } from 'react';
import NavBar from './../Navbar';
import TitleBar from './../TitleBar';
import Page1 from './Page1';
import Page2 from './Page2';
import './Page.css';

class Page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar menuActive="events" />
        <TitleBar />
        <div class="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <Page2 />
            </div>
          </div>
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <Page1 />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
