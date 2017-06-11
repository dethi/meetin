import React, { Component } from 'react';
import { connect } from 'react-redux';
import TitleBar from './../TitleBar';
import Category from './Category';
import './Page.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { addEvent, getOwnInfos } from './../../api';
import { Redirect } from 'react-router-dom';
import Autocomplete from 'react-google-autocomplete';

class Evenement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      participants: [],
      max_participants: 2,
      description: null,
      category: null,
      date: moment(),
      hour: '09',
      minutes: '00',
      time: '',
      address: '',
      redirect: false,
      error: false,
      lat: '',
      lng: ''
    };
  }

  handleChange = date => {
    this.setState({ date: date });
  };

  handleSelected = category => {
    this.setState({ category });
  };

  handleChangeTitle = event => {
    this.setState({ title: event.target.value });
  };

  handleChangeDesc = event => {
    this.setState({ description: event.target.value });
  };

  handleChangeSelected = event => {
    this.setState({ max_participants: parseInt(event.target.value, 10) });
  };

  handleChangeHour = event => {
    this.setState({ hour: event.target.value });
  };

  handleChangeMinute = event => {
    this.setState({ minutes: event.target.value });
  };

  handleAdresse = event => {
    this.setState({
      address: event.formatted_address,
      lat: event.geometry.location.lat(),
      lng: event.geometry.location.lng()
    });
  };

  sendInformation = () => {
    getOwnInfos().then(result_id => {
      if (result_id) {
        addEvent(result_id._id, this.state).then(result => {
          if (result) {
            this.setState({ redirect: true });
          } else {
            this.setState({ error: true });
          }
        });
      }
    });
  };

  generateOptions = (format, max) => {
    return Array.apply(null, { length: max })
      .map(Number.call, Number)
      .map(i => {
        return format(i);
      });
  };

  render() {
    if (this.state.redirect) return <Redirect to="/event" />;

    return (
      <div>
        <TitleBar title="Votre évènement" />
        <div className="container">
          {this.state.error &&
            <div className="notification is-danger box-error">
              Une erreur s'est produite. Veuillez vérifier vos informations.
              🤷🙏
            </div>}

          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <div className="box box--evenement">
                <div className="column is-center">

                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Titre</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="Titre de l'évènement"
                            onChange={this.handleChangeTitle}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Adresse</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <Autocomplete
                            style={{ width: '100%' }}
                            onPlaceSelected={this.handleAdresse}
                            types={['establishment', 'geocode']}
                            componentRestrictions={{ country: 'fr' }}
                            className="input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Nb. Personne</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <p className="control has-icons-left">
                            <span className="select select--property">
                              <select
                                className="select--property"
                                onChange={this.handleChangeSelected}
                              >
                                {this.generateOptions(i => {
                                  return (
                                    <option key={i} value={i + 2}>
                                      {i + 2}
                                    </option>
                                  );
                                }, 11)}
                              </select>
                            </span>
                            <span className="icon is-small is-left">
                              <i className="fa fa-user" />
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Date de fin</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <DatePicker
                            selected={this.state.date}
                            onChange={this.handleChange}
                            className="input"
                            style={{ width: '100%' }}
                          />
                        </div>
                      </div>

                      <div className="field">
                        <div className="field">
                          <p className="control">
                            <span className="select">
                              <select onChange={this.handleChangeHour}>
                                {this.generateOptions(i => {
                                  const val = i < 10 ? '0' + i : i;
                                  return (
                                    <option key={i} value={val}>
                                      {val}
                                    </option>
                                  );
                                }, 24)}
                              </select>
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="field">
                        <div className="field">
                          <p className="control">
                            <span className="select">
                              <select onChange={this.handleChangeMinute}>
                                {this.generateOptions(i => {
                                  i *= 5;
                                  const val = i < 10 ? '0' + i : i;
                                  return (
                                    <option key={i} value={val}>
                                      {val}
                                    </option>
                                  );
                                }, 12)}
                              </select>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field is-vertical">
                    <div className="is-normal">
                      <label className="label">Description</label>
                    </div>

                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <textarea
                            className="textarea"
                            placeholder="Description de l'évènement"
                            onChange={this.handleChangeDesc}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <Category onSelected={this.handleSelected} />
            </div>
          </div>
          <div className="hero-body">
            <a
              className="button is-pulled-right"
              onClick={this.sendInformation}
            >
              Valider
            </a>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.user };
};

export default connect(mapStateToProps)(Evenement);
