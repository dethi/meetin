import React, { Component } from 'react';
import { connect } from 'react-redux';
import TitleBar from './../TitleBar';
import Category from './Category';
import './Page.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { AddEvent, getOwnInfos } from './../../api';
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
      date: moment(),
      hour: '',
      minutes: '',
      time: '',
      address: '',
      redirect: false
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
    console.log(this.state);
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

    console.log(this.state);
  };

  sendInformation = () => {
    getOwnInfos().then(result_id => {
      const result = AddEvent(result_id._id, this.state);
      if (result) {
        this.setState({ redirect: true });
      }
    });
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
                                {Array.apply(null, { length: 11 })
                                  .map(Number.call, Number)
                                  .map(i => {
                                    return (
                                      <option key={i} value={i + 2}>
                                        {i + 2}
                                      </option>
                                    );
                                  })}
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
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
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
                                <option value="00">00</option>
                                <option value="05">05</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="25">25</option>
                                <option value="30">30</option>
                                <option value="35">35</option>
                                <option value="40">40</option>
                                <option value="45">45</option>
                                <option value="50">50</option>
                                <option value="55">55</option>
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
