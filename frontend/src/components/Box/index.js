import React, { Component } from 'react';
import classNames from 'classnames';
import './Box.css';

class Box extends Component {
  render() {
    return (
      <div className="column is-4" onClick={this.props.onClick}>
        <p
          className={classNames('box-evenement', {
            'Box--selected': this.props.isSelect
          })}
        >
          <img className="Box__img" src={this.props.image} alt="" />
        </p>
      </div>
    );
  }
}

export default Box;
