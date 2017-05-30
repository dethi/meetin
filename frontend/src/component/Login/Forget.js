import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { resetPassword } from '../../config/auth';
import './Forget.css';

class Forget extends Component {
  handleReset = e => {
    e.preventDefault();
    resetPassword(this.login.value).catch(error => {
      console.log("It doesn't work");
    });
  };

  render() {
    return (
      <section className="hero is-gradient is-fullheight">
        <div className="container is-fluid">
          <div className="hero-header">
            <nav className="nav">
              <div className="nav-left">
                <a className="nav-item">
                  <span className="title has-text-white"><b>Meet'</b>In</span>
                </a>
              </div>
            </nav>
          </div>
        </div>

        <form onSubmit={this.handleReset}>
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column center is-half">
                <div className="box">
                  <div id="app">
                    <div className="content">
                      <div className="columns">
                        <div className="column center is-8">
                          <p>Votre <b>e-mail</b> :</p>
                          <p className="control has-icon">
                            <input
                              className="input email-input"
                              type="text"
                              placeholder="Adresse e-mail"
                              ref={login => this.login = login}
                            />
                            <span className="icon user">
                              <i className="fa fa-user" />
                            </span>
                          </p>

                          <p className="control login">
                            <button
                              type="submit"
                              className="button is-danger is-outlined is-fullwidth"
                            >
                              Renvoyer
                            </button>
                          </p>
                          <span className="help">
                            <Link to="/login">Se connecter</Link> -
                            <Link to="/register"> Pas encore inscrit ?</Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default Forget;
