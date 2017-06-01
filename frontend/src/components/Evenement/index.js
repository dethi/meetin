import React, { Component } from 'react';
import NavBar from './../Navbar';
import TitleBar from './../TitleBar';
import Page1 from './Page1';
import Page2 from './Page2';
import './Page.css';

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0
    };
  }

  steps = [
    {
      title: 'Logo de votre évènement',
      component: <Page1 />
    },
    {
      title: 'Description de votre évenement',
      component: <Page2 />
    }
  ];

  stepBack = () => {
    if (this.state.step - 1 >= 0) this.setState({ step: this.state.step - 1 });
  };

  stepForward = () => {
    if (this.state.step + 1 < 2) this.setState({ step: this.state.step + 1 });
  };

  render() {
    return (
      <div>
        <NavBar menuActive="events" />
        <TitleBar title={this.steps[this.state.step].title} />

        <span className="arrow is-pulled-right" />
        <span className="arrow-left is-pulled-left" />

        <div>
          {this.steps[this.state.step].component}
        </div>
      </div>
    );
  }
}

export default Page;
