import React, { Component } from 'react';
import classNames from 'classnames';

import TitleBar from './../TitleBar';
import { addMatch, getMatchSuggest } from './../../api';

import './Discover.css';

class CardItem extends Component {
  toggleCard = () => {
    this.props.onClick();
  };

  render() {
    const { cardType, isSelected, hasSelected, user } = this.props;

    return (
      <div
        className={classNames('flipcard-container', cardType, {
          isSelected: isSelected,
          hasSelected: hasSelected
        })}
        onClick={this.toggleCard}
      >
        <div
          className={classNames('flipcard', {
            flipped: isSelected
          })}
          onClick={this.toggleCard}
        >
          <div className="back" />
          <div className="front">

            <div className="card boxed">
              <a className="card-image" to={''}>
                <figure className="image is-square">
                  <img src={user.photoURL} alt="profile_picture" />
                </figure>
              </a>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="subtitle is-3 has-text-centered">
                      Share <b>something</b>
                    </p>
                    <p className="title is-5 has-text-right">
                      with {user.displayName}
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
      cardSelected: null,
      matchedUser: null
    };
  }

  componentDidMount() {
    getMatchSuggest().then(matchedUser => {
      this.setState({ matchedUser: matchedUser });
    });
  }

  toggleCard = e => {
    this.setState({ cardSelected: e });

    const { matchedUser } = this.state;
    addMatch(matchedUser._id).then(ok => {
      // DO NOTHING
    });
  };

  render() {
    const { matchedUser } = this.state;

    const inlineTitle = {
      margin: '0 auto',
      marginTop: '190px',
      fontSize: '55px',
      color: '#FFCC80'
    };

    return (
      <div>
        <TitleBar title="Découvrir" />
        <div className="columns">
          {matchedUser
            ? <div className="column is-10 is-center">
                <CardItem
                  cardType="left"
                  isSelected={this.state.cardSelected === 0}
                  hasSelected={this.state.cardSelected !== null}
                  onClick={() => this.toggleCard(0)}
                  user={matchedUser}
                />
                <CardItem
                  cardType="center"
                  isSelected={this.state.cardSelected === 1}
                  hasSelected={this.state.cardSelected !== null}
                  onClick={() => this.toggleCard(1)}
                  user={matchedUser}
                />
                <CardItem
                  cardType="right"
                  isSelected={this.state.cardSelected === 2}
                  hasSelected={this.state.cardSelected !== null}
                  onClick={() => this.toggleCard(2)}
                  user={matchedUser}
                />
              </div>
            : <h1 style={inlineTitle}>
                Nous n'avons plus d'amis à vous proposer 🙅😅😇
              </h1>}
        </div>
      </div>
    );
  }
}

export default Discover;
