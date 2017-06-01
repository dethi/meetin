import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NavBar from './../Navbar';
import TitleBar from './../TitleBar';

import userAction from './../../actions/user';
import { getOwnHistory } from './../../api';

class History extends Component {
  componentWillMount() {
    getOwnHistory().then(users => {
      if (users) {
        this.props.dispatch(userAction.getOwnHistory(users));
      }
    });
  }

  render() {
    const { history } = this.props;

    return (
      <div>
        <NavBar menuActive="history" />
        <TitleBar title="Mon Historique" />
        <div className="container">
          <div className="columns column is-8-desktop is-offset-2-desktop is-multiline">
            {history &&
              history.map((e, i) => {
                const [firstName, ...lastName] = e.displayName.split(' ');
                return (
                  <div
                    className="column is-offset-1-mobile is-10-mobile is-one-third-tablet "
                    key={'user-' + i}
                  >
                    <div className="card boxed">
                      <Link className="card-image" to={'/user/' + e.uid}>
                        <figure className="image is-square">
                          <img src={e.photoURL} alt="profile_picture" />
                        </figure>
                      </Link>
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            <p className="title is-4 has-text-centered">
                              {firstName}<br />
                              {lastName}
                            </p>
                            <p className="has-text-right">
                              <Link
                                className="subtitle is-6"
                                to={'/user/' + e.uid}
                              >
                                @{'director' /* //FIXME e.role*/}
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { history: state.user.history };
};

export default connect(mapStateToProps)(History);
