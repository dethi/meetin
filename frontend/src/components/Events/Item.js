import React, { Component } from 'react';
import dateformat from 'dateformat';

import TitleBar from './../TitleBar';

import { getEventById } from './../../api';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      owner: {},
      participants: [],
      max_participants: 10,
      title: '',
      description: '',
      category: '',
      address: '',
      date: Date(),
      time: ''
    };
  }

  componentWillMount() {
    getEventById(this.props.match.params.id).then(event => {
      this.setState({ ...event });
    });
  }

  handleSignToEvent() {
    console.log('click');
  }

  render() {
    const fullEvent =
      this.state.participants.length === this.state.max_participants;
    return (
      <div>
        <TitleBar title={this.state.title} />
        <div className="section container">
          <div className="tile is-vertical">
            <div className="tile">
              <div className="tile is-parent">
                <article className="tile is-child">
                  <div className="bottom-spaced">
                    <p className="title">Informations générales</p>
                    <hr />
                    <div className="columns is-multiline">
                      <div className="column is-half">
                        <span className="icon is-large is-vcentered">
                          <i className="fa fa-calendar" />
                        </span>
                        <span className="subtitle hspaced is-vcentered">
                          {dateformat(this.state.date, 'dd/mm/yyyy')}
                        </span>
                      </div>
                      <div className="column is-half">
                        <span className="icon is-large is-vcentered">
                          <i className="fa fa-clock-o" />
                        </span>
                        <span className="subtitle hspaced is-vcentered">
                          {this.state.time}
                        </span>
                      </div>
                      <div className="column is-half">
                        <span className="icon is-large is-vcentered">
                          <i className="fa fa-users" />
                        </span>
                        <span className="subtitle hspaced is-vcentered">
                          <b>{this.state.participants.length}</b>/{this.state.max_participants}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-spaced">
                    <p className="title">Description</p>
                    <hr />
                    <p>{this.state.description}</p>
                  </div>
                  <div className="bottom-spaced">
                    <p className="title">Plan</p>
                    <hr />
                    <p />
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-vertical is-3">
                <article className="tile is-child">
                  <figure className="image is-square">
                    <img
                      src={this.state.owner.photoURL}
                      alt="profile_picture"
                    />
                  </figure>
                </article>
                <article className="tile is-child">
                  {fullEvent
                    ? <button className="button is-fullwidth box-padded subtitle is-4 is-dark is-disabled">
                        COMPLET
                      </button>
                    : <button
                        className="button is-fullwidth box-padded subtitle is-4 is-success"
                        onClick={this.handleSignToEvent.bind(this)}
                      >
                        S'inscrire
                      </button>}
                </article>
                <article className="tile is-child notification is-light">
                  <p className="title">Participants</p>
                  <hr />
                  <div>
                    {this.state.participants.length
                      ? this.state.participants.map((p, i) => {
                          return (
                            <figure
                              className="image is-64x64"
                              key={i}
                              style={{
                                'border-radius': '50%',
                                overflow: 'hidden'
                              }}
                            >
                              <img
                                src={p.photoURL}
                                alt={p.displayName}
                                style={{ width: '100%', height: '100%' }}
                              />
                            </figure>
                          );
                        })
                      : <div className="has-text-centered">
                          Aucun participant
                        </div>}
                  </div>
                </article>

              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Item;
