import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from './../Navbar';
import TitleBar from './../TitleBar';

import userAction from './../../actions/user';
import { getOwnInfos, UpdateProfil } from './../../api';

class Profile extends Component {
  componentWillMount() {
    getOwnInfos().then(user => {
      if (user) {
        this.props.dispatch(userAction.updateInfos(user));
      }
    });

    this.state = {
      disabled: true,
      description: '',
      Infos: ''
    };
  }

  handleCickEdit = () => {
    this.setState({ disabled: !this.state.disabled });
  };

  handleChangeDescription = event => {
    this.setState({ description: event.target.value });
  };

  handleChangeInfos = event => {
    this.setState({ Infos: event.target.value });
  };

  handleSendInformation = () => {
    var update_json = {
      description: this.state.description === ''
        ? this.props.description
        : this.state.description
    };

    UpdateProfil(update_json);
    this.setState({ disabled: true });
  };

  render() {
    const { user } = this.props;
    console.log(user);

    return (
      <div>
        <NavBar menuActive="profile" />
        <TitleBar title="Profile" />
        <div className="section container">
          <a
            className="tag is-danger is-medium is-pulled-right"
            onClick={
              this.state.disabled
                ? this.handleCickEdit
                : this.handleSendInformation
            }
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
                    {this.state.disabled
                      ? <p> Test </p>
                      : <div className="field">
                          <p className="control">
                            <textarea
                              className="textarea"
                              value=""
                              onChange={this.handleChangeInfos}
                            />
                          </p>
                        </div>}

                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child">
                  <div className="bottom-spaced">
                    <p className="title">Hey, I'm {user.displayName}</p>
                    <hr />
                  </div>
                  <div className="bottom-spaced">
                    <p className="title">Passions</p>
                    <hr />
                    {this.state.disabled
                      ? <p>{user.description}</p>
                      : <div className="field">
                          <p className="control">
                            <textarea
                              className="textarea"
                              value={this.props.description}
                              onChange={this.handleChangeDescription}
                            />
                          </p>
                        </div>}
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
