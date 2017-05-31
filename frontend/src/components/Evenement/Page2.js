import React, { Component } from 'react';
import './Page.css';

class Page2 extends Component {
  render() {
    return (
      <div className="box--evenement">
        <div className="column is-mobile is-8 is-center">
          <div className="field">
            <label className="label">Titre : </label>
            <p className="control">
              <input
                className="input is-hovered"
                type="text"
                placeholder="Votre titre"
              />
            </p>
          </div>

          <div className="field is-grouped">
            <div className="field-label is-normal">
              <label className="label">Nombre de Personne :</label>
            </div>
            <p className="control">
              <span className="select">
                <select>
                  <option disabled>Nb de Personne</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </span>
            </p>

            <div className="field-label is-normal">
              <label className="label">Activité : </label>
            </div>
            <p className="control">
              <span className="select">
                <select>
                  <option disabled>Activité</option>
                  <option>Football</option>
                  <option>Cinéma</option>
                  <option>NHL</option>
                  <option>Basketball</option>
                </select>
              </span>
            </p>

          </div>

          <div class="field">
            <label className="label">Description : </label>
            <p class="control">
              <textarea
                className="textarea is-hovered"
                placeholder="Votre Description"
              />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Page2;
