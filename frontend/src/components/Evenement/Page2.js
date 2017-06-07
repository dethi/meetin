import React, { Component } from 'react';
import './Page.css';

class Page2 extends Component {
  render() {
    return (
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
                        <option selected>1</option>
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
    );
  }
}

export default Page2;
