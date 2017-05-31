import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { loginWithGoogle } from './../../firebase';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,
      hasError: false,
      errorMsg: ''
    };
  }

  handleGoogleLogin = () => {
    loginWithGoogle()
      .then(res => {
        this.setState({
          redirectToReferrer: true,
          hasError: false,
          errorMsg: ''
        });
      })
      .catch(err => {
        this.setState({
          redirectToReferrer: false,
          hasError: true,
          errorMsg: err.message
        });
      });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { isLogged } = this.props;
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    } else if (isLogged) {
      return <Redirect to="/" />;
    }

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
            <div className="column is-center is-one-third">
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

const mapStateToProps = state => {
  return {
    isLogged: state.user !== null
  };
};

export default connect(mapStateToProps)(Login);
