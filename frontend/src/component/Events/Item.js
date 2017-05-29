import React, { Component } from 'react';
import NavBar from './../Navbar';
import TitleBar from './../TitleBar';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      title: 'Partie de foot',
      profile_picture: 'http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam risus porta, tincidunt odio consectetur, dapibus ex. Suspendisse auctor fringilla elit vitae bibendum. Etiam vel risus eget nibh imperdiet dapibus. In hac habitasse platea dictumst. Proin tristique elit in facilisis sagittis. Proin et odio dapibus, ultricies sem nec, sollicitudin lorem. Duis quis justo ut augue consectetur mollis ut quis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi nibh, convallis sed finibus non, facilisis tempor risus. Integer efficitur eros eu orci porttitor, id bibendum quam sagittis. Nunc non enim sagittis, aliquet turpis sit amet, auctor magna.'
    };
  }
  render() {
    return (
      <div>
        <NavBar />
        <TitleBar title={this.state.title + ': ' + this.state.id} />
        <div className="section container">
          <div className="tile is-vertical">
            <div className="tile">
              <div className="tile is-parent">
                <article className="tile is-child">
                  <div className="bottom-spaced">
                    <p className="title">Informations générales</p>
                    <hr />
                    <div className="columns is-multiline">
                      <div className="column is-half">
                        <span className="icon is-large is-vcentered">
                          <i className="fa fa-calendar" />
                        </span>
                        <span className="subtitle hspaced is-vcentered">
                          Lundi 21 janvier 2017
                        </span>
                      </div>
                      <div className="column is-half">
                        <span className="icon is-large is-vcentered">
                          <i className="fa fa-clock-o" />
                        </span>
                        <span className="subtitle hspaced is-vcentered">
                          10h30
                        </span>
                      </div>
                      <div className="column is-half">
                        <span className="icon is-large is-vcentered">
                          <i className="fa fa-users" />
                        </span>
                        <span className="subtitle hspaced is-vcentered">
                          <b>10</b>/20
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-spaced">
                    <p className="title">Description</p>
                    <hr />
                    <p>{this.state.description}</p>
                  </div>
                  <div className="bottom-spaced">
                    <p className="title">Plan</p>
                    <hr />
                    <p />
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-vertical is-3">
                <article className="tile is-child">
                  <figure className="image is-square">
                    <img
                      src={this.state.profile_picture}
                      alt="profile_picture"
                    />
                  </figure>
                </article>
                <article className="tile is-child notification is-light">
                  <p className="title">Infos</p>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam risus porta, tincidunt
                  </p>
                </article>
                <article className="tile is-child">
                  <button className="button is-success is-fullwidth box-padded subtitle is-4">
                    S'inscrire
                  </button>
                </article>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Item;
