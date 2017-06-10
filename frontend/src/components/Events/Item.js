import React, { Component } from 'react';
import { connect } from 'react-redux';
import dateformat from 'dateformat';
import { Map, TileLayer, Marker } from 'react-leaflet';

import TitleBar from './../TitleBar';
import './Event.css';

import { getEventById, suscribeById, unsuscribeById } from './../../api';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      event: {
        _id: null,
        isSuscribed: false,
        owner: {},
        participants: [],
        max_participants: 10,
        title: '',
        description: '',
        category: '',
        address: '',
        date: Date(),
        time: '',
        lat: 0,
        lng: 0
      }
    };
  }

  componentDidMount() {
    getEventById(this.props.match.params.id).then(event => {
      this.setState({ event });
    });
  }

  handleSignToEvent() {
    suscribeById(this.props.match.params.id).then(event => {
      this.setState({ event });
    });
  }

  handleUnsignToEvent() {
    unsuscribeById(this.props.match.params.id).then(event => {
      this.setState({ event });
    });
  }

  render() {
    const event = this.state.event;

    const fullEvent = event.participants.length === event.max_participants;
    const isSuscribed = event.participants.reduce((a, b) => {
      return a || b.uid === this.state.user.uid;
    }, false);

    const position = event.lat && event.lng ? [event.lat, event.lng] : null;

    return (
      <div>
        <TitleBar title={event.title} />
        <div className="section container">
          <div className="tile is-vertical">
            <div className="tile">
              <div className="tile is-parent">
                <article className="tile is-child">
                  <div className="bottom-spaced">
                    <p className="title">Informations générales</p>
                    <hr />
                    <div className="columns">
                      <div className="column is-one-third">
                        <span className="icon is-large is-vcentered">
                          <i className="fa fa-calendar" />
                        </span>
                        <span className="subtitle hspaced is-vcentered">
                          {dateformat(event.date, 'dd/mm/yyyy')}
                        </span>
                      </div>
                      <div className="column is-one-third">
                        <span className="icon is-large is-vcentered">
                          <i className="fa fa-clock-o" />
                        </span>
                        <span className="subtitle hspaced is-vcentered">
                          {event.time}
                        </span>
                      </div>
                      <div className="column is-one-third">
                        <span className="icon is-large is-vcentered">
                          <i className="fa fa-users" />
                        </span>
                        <span className="subtitle hspaced is-vcentered">
                          <b>{event.participants.length}</b>/{event.max_participants}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-spaced">
                    <p className="title">Description</p>
                    <hr />
                    <p>{event.description}</p>
                  </div>
                  <div className="bottom-spaced">
                    <p className="title">Plan</p>
                    <hr />
                    <p />

                    {position &&
                      <Map center={position} zoom={13}>
                        <TileLayer
                          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        />
                        <Marker position={position} />
                      </Map>}
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-vertical is-3">
                <article className="tile is-child">
                  <figure className="image is-square">
                    <img src={event.owner.photoURL} alt="profile_picture" />
                  </figure>
                </article>
                <article className="tile is-child">
                  {isSuscribed
                    ? <button
                        className="button is-fullwidth box-padded subtitle is-4 is-danger"
                        onClick={this.handleUnsignToEvent.bind(this)}
                      >
                        Se désinscrire
                      </button>
                    : fullEvent
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
                    {event.participants.length
                      ? event.participants.map((p, i) => {
                          return (
                            <figure
                              className="image is-64x64"
                              key={i}
                              style={{
                                borderRadius: '50%',
                                overflow: 'hidden',
                                display: 'inline-block',
                                margin: '0px 10px'
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

const mapStateToProps = state => {
  return { ...state.user };
};

export default connect(mapStateToProps)(Item);
