import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Index.css';

class Index extends Component {
  render() {
    return (
      <section className="hero is-img is-fullheight">
        <div className="container is-fluid">
          <div className="hero-header">
            <nav className="nav">
              <div className="nav-left">
                <a className="nav-item">
                  <span className="title has-text-white">
                    <b>Meet</b>'In
                  </span>
                </a>
              </div>
              <div className="nav-right is-hidden-tablet">
                <a className="nav-item">
                  <span className="button is-info">
                    <span className="icon">
                      <i className="fa fa-sign-in" />
                    </span>
                  </span>
                </a>
              </div>
              <div className="nav-item is-hidden-mobile">
                <div className="field is-grouped">
                  <p className="control">
                    <a>
                      <Link
                        to="/Login"
                        className="button tag is-danger is-medium"
                      >
                        Se connecter
                      </Link>
                    </a>
                  </p>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="content column is-center is-half center">
              <h2 className="title is-2 has-text-white">
                <b>Une nouvelle façon</b>
              </h2>
              <p className="subtitle is-3 has-text-white">
                de se <b>rencontrer</b>
              </p>
              <a>
                <Link to="/Login" className="button tag is-danger is-large">
                  Découvrir Meet'In
                </Link>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Index;
