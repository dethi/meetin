import React, { Component } from 'react';
import NavBar from './../Navbar';
import TitleBar from './../TitleBar';
import Category from './Category';
import './Page.css';

export default class Evenement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      participants: [],
      nb_participant: 2,
      description: '',
      category: '',
      date: new Date(),
      time_period: ''
    };
  }

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
    this.setState({ nb_participant: parseInt(event.target.value) });
  };

  sendInformation = () => {
    console.log(this.state);

    // TO FIX WITH POST EVENT CALL
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <NavBar menuActive="events" />
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
