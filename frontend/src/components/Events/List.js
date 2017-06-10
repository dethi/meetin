import React, { Component } from 'react';
import dateformat from 'dateformat';
import ellipsize from 'ellipsize';

import TitleBar from './../TitleBar';
import { Link } from 'react-router-dom';
import { listEvents } from './../../api';
import categories from './../../categories';

import emptyEvents from './../../img/events-empty-data-set.png';

class EventItem extends Component {
  render() {
    const outdated = {
      opacity: '0.6',
      filter: 'brightness(90%)'
    };

    return (
      <div className="box" style={this.props.outdated ? outdated : null}>
        <article className="media">
          <div className="media-left is-vcentered">
            <Link to={`/event/${this.props._id}`}>
              <figure
                className="image is-128x128"
                style={{ padding: '20px', cursor: 'pointer' }}
              >
                <img
                  src={categories[this.props.category]}
                  alt={this.props.name}
                />
              </figure>
            </Link>
          </div>
          <div className="media-content is-vcentered">
            <div className="content">
              <p>
                <span className="title is-3">
                  <strong>{this.props.title}</strong>
                </span>
                <br />
                <span className="icon is-small" style={{ marginRight: '5px' }}>
                  <i className="fa fa-calendar" aria-hidden="true" />
                </span>
                <span>
                  <small>
                    {dateformat(this.props.date, 'dd/mm/yyyy')}
                  </small>
                </span>
                <span className="hspaced">-</span>
                <small>{this.props.time}</small>
              </p>

              <p>{ellipsize(this.props.description, 60)}</p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
  }

  componentWillMount() {
    listEvents().then(events => {
      if (events) this.setState({ events });
    });
  }

  render() {
    return (
      <div>
        <TitleBar title="Evenements" />
        <div className="container">
          <div className="has-text-centered box-padded">
            <Link
              className="button is-large is-success is-outlined"
              to="/event/new"
            >
              Creer un evenement ?
            </Link>
          </div>
          <hr />

          {!this.state.events.length
            ? <div>
                <figure className="has-text-centered">
                  <img src={emptyEvents} alt="profile_picture" />
                </figure>
                <p className="subtitle is-4 has-text-centered">
                  Oops, il n'y a aucun evenement..
                </p>
              </div>
            : <div className="columns is-multiline">
                {this.state.events.map((e, i) => {
                  return (
                    <div className="column is-one-third" key={i}>
                      <EventItem {...e} />
                    </div>
                  );
                })}
              </div>}

        </div>
      </div>
    );
  }
}

export default Dashboard;
