import React, { Component } from 'react';
import TitleBar from './../TitleBar';

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
            <figure className="image is-128x128" style={{ padding: '20px' }}>
              <img src={this.props.icon} alt={this.props.name} />
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
      events: [
        {
          id: 1,
          name: 'Pizza',
          date: '11/10/2017',
          time: 'Soir',
          description: 'Petite pizza oklm',
          icon: 'https://image.flaticon.com/icons/svg/167/167741.svg',
          outdated: false
        },
        {
          id: 1,
          name: 'Basket',
          date: '11/10/2017',
          time: 'Midi',
          description: 'Avec la team',
          icon: 'https://image.flaticon.com/icons/svg/167/167739.svg',
          outdated: false
        },
        {
          id: 1,
          name: 'Etudes',
          date: '11/10/2017',
          time: 'Aprem',
          description: 'Avec la team',
          icon: 'https://image.flaticon.com/icons/svg/167/167729.svg',
          outdated: true
        },
        {
          id: 1,
          name: 'Salad party',
          date: '11/10/2017',
          time: 'Midi',
          description: 'Un esprit sain dans un corps sain',
          icon: 'https://image.flaticon.com/icons/svg/167/167759.svg',
          outdated: true
        },
        {
          id: 1,
          name: 'Kung fu',
          date: '11/10/2017',
          time: 'Midi',
          description: 'Un esprit sain dans un corps sain',
          icon: 'https://image.flaticon.com/icons/svg/167/167752.svg',
          outdated: true
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <TitleBar title="Mon calendrier" />
        <div className="columns">
          <div className="column is-8-tablet is-10-mobile is-center">
            <div className="has-text-centered box-padded">
              <button className="button is-large is-info is-outlined">
                Me proposer un meeting
              </button>
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
