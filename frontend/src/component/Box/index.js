import React, { Component } from 'react';
import classNames from 'classnames';
import './Box.css';

class Box extends Component {
  render() {
    return (
      <div
        className={classNames('column', 'is-3', 'box-evenement', {
          'Box--selected': this.props.isSelect
        })}
        onClick={this.props.onClick}
      >
        <img className="Box__img" src={this.props.image} alt="" />
      </div>
    );
  }
}

export default Box;
