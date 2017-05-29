import React, { Component } from 'react';
import NavBar from './../Navbar';
import TitleBar from './../TitleBar';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Roberto',
      profile_picture: 'http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam risus porta, tincidunt odio consectetur, dapibus ex. Suspendisse auctor fringilla elit vitae bibendum. Etiam vel risus eget nibh imperdiet dapibus. In hac habitasse platea dictumst. Proin tristique elit in facilisis sagittis. Proin et odio dapibus, ultricies sem nec, sollicitudin lorem. Duis quis justo ut augue consectetur mollis ut quis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi nibh, convallis sed finibus non, facilisis tempor risus. Integer efficitur eros eu orci porttitor, id bibendum quam sagittis. Nunc non enim sagittis, aliquet turpis sit amet, auctor magna.'
    };
  }
  render() {
    return (
      <div>
        <NavBar menuActive="profile" />
        <TitleBar title="Profile" />
        <div className="section container">
          <div className="tile is-vertical">
            <div className="tile">
              <div className="tile is-parent is-vertical is-4">
                <article className="tile is-child">
                  <figure className="image is-square">
                    <img
                      src={this.state.profile_picture}
                      alt="profile_picture"
                    />
                  </figure>
                </article>
                <article className="tile is-child notification is-danger">
                  <p className="title">Infos</p>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam risus porta, tincidunt
                  </p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child">
                  <div className="bottom-spaced">
                    <p className="title">Hey, I'm {this.state.name}</p>
                    <hr />
                    <p>{this.state.description}</p>
                  </div>
                  <div className="bottom-spaced">
                    <p className="title">Passions</p>
                    <hr />
                    <p>{this.state.description}</p>
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

export default Profile;
