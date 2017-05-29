import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../../config/auth'
import './Login.css'

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault()
    login(this.login.value, this.password.value).catch(error => {
      // ADD BOX DANGER HERE
    })
  }

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

        <form onSubmit={this.handleSubmit}>
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column center is-half">
                <div className="box">
                  <div className="content">
                    <p>Se connecter avec :</p>
                    <span className="button tag is-danger is-large">
                      <i className="fa fa-google-plus" />
                    </span>
                    <span className="button tag is-danger is-large">
                      <i className="fa fa-facebook-f" />
                    </span>
                  </div>
                  <div className="content is-hr">
                    <span>or</span>
                  </div>
                  <div id="app">
                    <div className="content">
                      <div className="columns">
                        <div className="column center is-8">
                          <p>Se connecter avec son <b>e-mail</b> :</p>
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
                          <p className="control has-icon">
                            <input
                              className="input password-input"
                              type="password"
                              placeholder="Password"
                              ref={password => this.password = password}
                            />
                            <span className="icon user">
                              <i className="fa fa-lock" />
                            </span>
                          </p>
                          <p className="control login">
                            <button
                              type="submit"
                              className="button is-danger is-outlined is-fullwidth"
                            >
                              Login
                            </button>
                          </p>
                          <span className="help">
                            <Link to="/forget">Mot de passe oublié ?</Link>
                            {' '}
                            -
                            {' '}
                            <Link to="/register">Pas encore inscrit ?</Link>
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
    )
  }
}

export default Login
