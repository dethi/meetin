import React, { Component } from 'react';
import classNames from 'classnames';

import TitleBar from './../TitleBar';

import './Discover.css';

class CardItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  toggleCard = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div
        className={classNames('flipcard-container', this.props.cardType, {
          isSelected: this.props.isSelected,
          hasSelected: this.props.hasSelected
        })}
        onClick={this.toggleCard}
      >
        <div
          className={classNames('flipcard', {
            flipped: this.props.isSelected
          })}
          onClick={this.toggleCard}
        >
          <div className="back" />
          <div className="front">

            <div className="card boxed">
              <a className="card-image" to={''}>
                <figure className="image is-square">
                  <img
                    src="https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/11856321_564262337057061_6187415250851908431_o.jpg?oh=937a29bc2a0ebddbaa5668bf161edac1&oe=59A04E0C"
                    alt="profile_picture"
                  />
                </figure>
              </a>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="subtitle is-3 has-text-centered">
                      Share <b>a Pizza</b>
                    </p>
                    <p className="title is-5 has-text-right">
                      with Kevin Louzoun
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

class Discover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardSelected: null
    };
  }

  toggleCard = e => {
    this.setState({ cardSelected: e });
  };

  render() {
    return (
      <div>
        <TitleBar title="Découvrir" />
        <div className="columns">
          <div className="column is-10 is-center">
            <CardItem
              cardType="left"
              isSelected={this.state.cardSelected === 0}
              hasSelected={this.state.cardSelected !== null}
              onClick={() => this.toggleCard(0)}
            />
            <CardItem
              cardType="center"
              isSelected={this.state.cardSelected === 1}
              hasSelected={this.state.cardSelected !== null}
              onClick={() => this.toggleCard(1)}
            />
            <CardItem
              cardType="right"
              isSelected={this.state.cardSelected === 2}
              hasSelected={this.state.cardSelected !== null}
              onClick={() => this.toggleCard(2)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Discover;
