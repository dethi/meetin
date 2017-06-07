import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import NavBar from './../Navbar';
import TitleBar from './../TitleBar';

import userAction from './../../actions/user';
import { getOwnInfos, updateProfil } from './../../api';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      disabled: true,
      user: this.props.user
    };

    getOwnInfos().then(user => {
      if (user) {
        this.props.dispatch(userAction.updateInfos(user));
        this.setState({ isLoading: false });
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ user: nextProps.user });
  }

  handleCickEdit = () => {
    this.setState({ disabled: !this.state.disabled });
  };

  handleChangeDescription = event => {
    this.setState({
      user: {
        ...this.state.user,
        description: event.target.value
      }
    });
  };

  handleChangeInfos = event => {
    this.setState({
      user: {
        ...this.state.user,
        infos: event.target.value
      }
    });
  };

  handleSendInformation = () => {
    updateProfil({
      description: this.state.user.description
    });

    this.props.dispatch(userAction.updateInfos(this.state.user));
    this.setState({ disabled: true });
  };

  render() {
    const { isLoading, disabled, user } = this.state;

    return (
      <div>
        <NavBar menuActive="profile" />
        <TitleBar title="Profile" />
        <div className="section container">
          <a
            className={classNames(
              'tag',
              'button',
              'is-medium',
              'is-pulled-right',
              {
                'is-danger': disabled,
                'is-success': !disabled,
                'is-loading': isLoading
              }
            )}
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
                      ? <p>
                          {' '}
                          <div>
                            <span className="icon is-small">
                              <i className="fa fa-envelope-o" />
                            </span>
                            {user.email}
                          </div>
                          <div>
                            <span className="icon is-small">
                              <i className="fa fa-phone" />
                            </span>
                            06.86.90.80.83
                          </div>
                          {' '}
                        </p>
                      : <div className="field">
                          <p className="control has-icons-left">
                            <input
                              className="input is-small"
                              type="text"
                              placeholder="Téléphone"
                            />
                            <span className="icon is-small is-left">
                              <i className="fa fa-phone" />
                            </span>
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
                              onChange={this.handleChangeDescription}
                              value={user.description}
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
  return { ...state.user };
};

export default connect(mapStateToProps)(Profile);
