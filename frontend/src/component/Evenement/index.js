import React, { Component } from 'react';
import NavBar from './../Navbar';
import TitleBar from './../TitleBar';
import Page1 from './Page1';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    };
  }

  steps = [
    {
      name: 'Logo',
      component: <Page1 />
    }
  ];

  render() {
    return (
      <div>
        <NavBar menuActive="events" />
        <TitleBar title="Choisissez une icone" />
        <div>
          {this.steps[this.state.step].component}
        </div>
      </div>
    );
  }
}

export default Page;
