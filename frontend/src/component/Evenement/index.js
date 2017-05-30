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
      name: 'Logo',
      component: <Page1 />
    },
    {
      name: 'Box',
      component: <Page2 />
    }
  ];

  stepForward = () => {
    if (this.state.step + 1 < 3) this.setState({ step: this.state.step + 1 });
  };

  render() {
    return (
      <div>
        <NavBar menuActive="events" />
        <TitleBar title="Choisissez une icone" />
        <div className="button--style">
          <a
            className="button is-primary is-pulled-right"
            onClick={this.stepForward}
          >
            {' '}Etape suivante
          </a>
        </div>
        <div>
          {this.steps[this.state.step].component}
        </div>
      </div>
    );
  }
}

export default Page;
