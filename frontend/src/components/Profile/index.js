import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import TitleBar from './../TitleBar';

import userAction from './../../actions/user';
import { getOwnInfos, updateProfil } from './../../api';
import './Profil.css';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      disabled: true,
      user: this.props.user
    };
  }

  componentWillMount() {
    getOwnInfos().then(user => {
      if (user) {
        this.props.dispatch(userAction.updateInfos(user));
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ user: nextProps.user });
  }

  handleEdit = () => {
    this.setState({ disabled: !this.state.disabled });
  };

  handleCancel = () => {
    this.setState({
      disabled: !this.state.disabled,
      user: this.props.user
    });
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

  handleChangeName = event => {
    this.setState({
      user: {
        ...this.state.user,
        displayName: event.target.value
      }
    });
  };

  handleChangePhone = event => {
    this.setState({
      user: {
        ...this.state.user,
        phone: event.target.value
      }
    });
  };

  handleSendInformation = () => {
    this.setState({ disabled: true, isLoading: true });

    const { user } = this.state;

    updateProfil({
      description: user.description,
      phone: user.phone,
      displayName: user.displayName
    }).then(ok => {
      if (ok) {
        this.props.dispatch(userAction.updateInfos(user));
      }
      this.setState({ isLoading: false });
    });
  };

  render() {
    const { isLoading, disabled, user } = this.state;

    return (
      <div>
        <TitleBar title="Profile" />
        <div className="section container">
          {!this.state.disabled &&
            <a
              className="tag button is-medium is-pulled-right is-danger is-modifier"
              onClick={this.handleCancel}
            >
              <span className="icon is-small">
                <i className="fa fa-close" />
              </span>
            </a>}
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
              this.state.disabled ? this.handleEdit : this.handleSendInformation
            }
          >
            {this.state.disabled
              ? 'Editer'
              : <span className="icon is-small">
                  <i className="fa fa-check" />
                </span>}
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
              </div>
              <div className="tile is-parent">
                <article className="tile is-child">
                  {this.state.disabled
                    ? <div className="bottom-spaced">
                        <p className="title">Hey, I'm {user.displayName}</p>
                        <hr />
                      </div>
                    : <div className="field">
                        <p className="control">
                          <input
                            className="input is-small"
                            type="text"
                            placeholder="Votre nom"
                            defaultValue={user.displayName}
                            onChange={this.handleChangeName}
                          />
                        </p>
                        <hr />
                      </div>}
                  <div className="bottom-spaced">
                    {this.state.disabled
                      ? <div>
                          <div>
                            <span className="icon is-small margin-text">
                              <i className="fa fa-envelope-o" />
                            </span>
                            {user.email}
                          </div>
                          {user.phone &&
                            <div>
                              <span className="icon is-small  margin-text">
                                <i className="fa fa-phone" />
                              </span>
                              {user.phone}
                            </div>}
                        </div>
                      : <div className="field">
                          <p className="control has-icons-left">
                            <input
                              className="input is-small"
                              type="text"
                              placeholder="Téléphone"
                              value={user.phone}
                              onChange={this.handleChangePhone}
                            />
                            <span className="icon is-small is-left ">
                              <i className="fa fa-phone" />
                            </span>
                          </p>
                        </div>}
                  </div>
                  <div className="bottom-spaced">
                    <p className="title">Description</p>
                    <hr />
                    {this.state.disabled
                      ? <div
                          dangerouslySetInnerHTML={{
                            __html:
                              user.description &&
                                user.description.replace(
                                  /(?:\r\n|\r|\n)/g,
                                  '<br />'
                                )
                          }}
                        />
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
