import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from './../Navbar';
import TitleBar from './../TitleBar';

import userAction from './../../actions/user';
import { getOwnInfos } from './../../api';

class Profile extends Component {
  componentWillMount() {
    getOwnInfos().then(user => {
      if (user) {
        this.props.dispatch(userAction.updateInfos(user));
      }
    });

    this.state = {
      disabled: true
    };
  }

  handleCickEdit = () => {
    this.setState({ disabled: !this.state.disabled });
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        <NavBar menuActive="profile" />
        <TitleBar title="Profile" />
        <div className="section container">
          <a
            className="tag is-danger is-medium is-pulled-right"
            onClick={this.handleCickEdit}
          >
            {this.state.disabled ? 'Editer' : 'Valider'}
          </a>
          <div className="tile is-vertical">
            <div className="tile">
              <div className="tile is-parent is-vertical is-4">
                <div className="box-padded">
                  <article className="tile is-child">
                    <figure className="image is-square">
                      <img src={user.photoURL} alt="profile_picture" />
                    </figure>
                  </article>
                </div>
                <div className="box-padded">
                  <article className="tile is-child notification is-danger">
                    <p className="title">Infos</p>
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam risus porta, tincidunt
                    </p>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child">
                  <div className="bottom-spaced">
                    <p className="title">Hey, I'm {user.displayName}</p>
                    <hr />
                    <p>
                      {user.description}
                    </p>
                  </div>
                  <div className="bottom-spaced">
                    <p className="title">Passions</p>
                    <hr />
                    <p>{user.description}</p>
                  </div>
                </article>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Profile);
