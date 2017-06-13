import React, { Component } from 'react';

import TitleBar from './../TitleBar';
import Loading from './../Loading';

import { getUserById } from './../../api';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentWillMount() {
    getUserById(this.props.match.params.id).then(user => {
      this.setState({ user });
    });
  }

  render() {
    const { user } = this.state;

    if (!user) return <Loading />;

    return (
      <div>
        <TitleBar title={user.displayName.split(' ')[0] + "'s profile"} />
        <div className="section container">

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
                  <div className="bottom-spaced">
                    <p className="title">Hey, I'm {user.displayName}</p>
                    <hr />
                  </div>
                  <div className="bottom-spaced">
                    <div>
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

                  </div>
                  <div className="bottom-spaced">
                    <p className="title">Passions</p>
                    <hr />
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          user.description &&
                            user.description.replace(
                              /(?:\r\n|\r|\n)/g,
                              '<br />'
                            )
                      }}
                    />
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

export default User;
