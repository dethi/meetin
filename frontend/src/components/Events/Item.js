import React, { Component } from 'react';

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
      console.log(this.props.match.params.id);
      console.log(event);
      this.setState({ ...event });
    });
  }

  render() {
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
                          Lundi 21 janvier 2017
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
                <article className="tile is-child notification is-light">
                  <p className="title">Infos</p>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec aliquam risus porta, tincidunt
                  </p>
                </article>
                <article className="tile is-child">
                  <button className="button is-success is-fullwidth box-padded subtitle is-4">
                    S'inscrire
                  </button>
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
