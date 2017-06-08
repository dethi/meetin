import React, { Component } from 'react';
import { connect } from 'react-redux';
import TitleBar from './../TitleBar';
import Category from './Category';
import './Page.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { AddEvent } from './../../api';
import { Redirect } from 'react-router-dom';

class Evenement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      participants: [],
      max_participants: 2,
      description: '',
      category: '',
      date: new Date(),
      time: moment(),
      address: '',
      redirect: false
    };
  }

  handleChange = date => {
    this.setState({ time: date });
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

  sendInformation = () => {
    const result = AddEvent(this.props.user.uid, this.state);
    if (result) {
      this.setState({ redirect: result });
    }
  };

  render() {
    if (this.state.redirect) return <Redirect to="/event" />;

    return (
      <div>
        <TitleBar title="Hello" />
        <div className="container">

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
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
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
                            selected={this.state.time}
                            onChange={this.handleChange}
                            className="input"
                            style={{ width: '100%' }}
                          />
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
