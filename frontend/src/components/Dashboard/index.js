import React, { Component } from 'react';
import TitleBar from './../TitleBar';
import classNames from 'classnames';

import { Link } from 'react-router-dom';
import { getOwnEvents } from './../../api';
import categories from './../../categories';

import emptyEvents from './../../img/events-empty-data-set.png';

import './Dashboard.css';

class EventItem extends Component {
  render() {
    return (
      <div
        className={classNames('box', {
          outdated: this.props.date < new Date()
        })}
      >
        <article className="media">
          <div className="media-left is-vcentered">
            <figure className="image is-128x128" style={{ padding: '20px' }}>
              <img
                src={categories[this.props.category]}
                alt={this.props.name}
              />
            </figure>
          </div>
          <div className="media-content is-vcentered">
            <div className="content">
              <p>
                <span className="title is-3">
                  <strong>{this.props.name}</strong>
                </span>
                <br />
                <span className="icon is-small" style={{ marginRight: '5px' }}>
                  <i className="fa fa-calendar" aria-hidden="true" />
                </span>
                <span>
                  <small>{this.props.date}</small>
                </span>
                <span className="hspaced">-</span>
                <small>{this.props.time}</small>
              </p>

              <p>{this.props.description}</p>
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
    getOwnEvents().then(events => {
      console.log(events);
      if (events) this.setState({ events });
    });
  }

  render() {
    return (
      <div>
        <TitleBar title="Mon calendrier" />
        <div className="columns">
          <div className="column is-8-tablet is-10-mobile is-center">
            <div className="has-text-centered box-padded">
              <Link
                className="button is-large is-info is-outlined"
                to="/discover"
              >
                Me proposer un meeting
              </Link>
            </div>
            <hr />
            {!this.state.events.length
              ? <div>
                  <figure className="has-text-centered">
                    <img src={emptyEvents} alt="profile_picture" />
                  </figure>
                  <p className="subtitle is-4 has-text-centered">
                    Oops, vous n'avez aucun evenement..
                  </p>
                </div>
              : this.state.events.map((e, i) => {
                  return <EventItem key={i} {...e} />;
                })}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
