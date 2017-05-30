import React, { Component } from 'react';
import classNames from 'classnames';
import './Box.css';

class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false
    };
  }

  handleOnClick = e => {
    this.setState({ isSelected: !this.state.isSelected });
  };

  render() {
    return (
      <div
        className={classNames('column', 'is-3', 'box-evenement', {
          'Box--selected': this.state.isSelected
        })}
        onClick={this.handleOnClick}
      >
        <img className="Box__img" src={this.props.image} alt="" />
      </div>
    );
  }
}

export default Box;
