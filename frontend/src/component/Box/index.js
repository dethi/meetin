import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  render() {
    return (
      <div className="column is-3 box-evenement">
        <img className="Box--img" src={this.props.image} alt="" />
      </div>
    );
  }
}

export default Box;
