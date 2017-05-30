import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  render() {
    return (
      <div className="column is-one-quarter box-evenement">
        <img className="Box--img" src={this.props.image} alt="" />
      </div>
    );
  }
}

export default Box;
