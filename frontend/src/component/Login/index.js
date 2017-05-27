import React, { Component } from 'react';
import firebase from 'firebase';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      errorMsg: ''
    };
  }

  handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(res => {
        console.log(res.user);
        this.setState({ hasError: false, errorMsg: '' });
      })
      .catch(err => {
        this.setState({ hasError: true, errorMsg: err.message });
      });
  };

  render() {
    const { hasError, errorMsg } = this.state;

    return (
      <section className="hero is-fullheight Login__gradient">
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

        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column center is-one-third">
              <div className="box">
                <div className="content">
                  <h4>Login</h4>

                  {hasError &&
                    <div className="notification is-danger">
                      {errorMsg}
                    </div>}

                  <button
                    className="button is-info is-fullwidth"
                    onClick={this.handleGoogleLogin}
                  >
                    <span className="icon">
                      <i className="fa fa-google" />
                    </span>
                    <span>Login with <b>Google</b></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
