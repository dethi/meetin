import React, { Component } from 'react';
import NavBar from './../Navbar';
import TitleBar from './../TitleBar';
import Category from './Category';
import './Page.css';

export default class Evenement extends Component {
  handleSelected = category => {
    console.log(category);
  };

  render() {
    return (
      <div>
        <NavBar menuActive="events" />
        <TitleBar title="Hello" />
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <div className="box--evenement">
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
                              <select className="select--property">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
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
                      <label className="label">Description</label>
                    </div>

                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <textarea
                            className="textarea"
                            placeholder="Description de l'évènement"
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
        </div>
      </div>
    );
  }
}
