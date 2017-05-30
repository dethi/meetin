import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teamId: 1,
      isActive: false,
      redirect: false,
      hasError: false,
      errorMsg: ''
    };

    this.logout = this.logout.bind(this);
  }

  toggleMenu = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  logout(e) {
    e.preventDefault();
    firebase.auth().signOut().then(() => {
      this.setState({
        redirect: true,
        hasError: false,
        errorMsg: ''
      });
    });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    const menus = [
      {
        id: 'home',
        name: 'Accueil',
        to: '/dashboard'
      },
      {
        id: 'events',
        name: 'Evenements',
        to: ''
      },
      {
        id: 'discover',
        name: 'Découverte',
        to: '/discover'
      },
      {
        id: 'about',
        name: 'About',
        to: ''
      }
    ];

    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">
              <span className="title"><b>Meet'</b>In</span>
            </a>
            {menus.map((m, i) => {
              return (
                <Link
                  className={
                    'nav-item is-tab is-primary is-hidden-mobile ' +
                      (this.props.menuActive === m.id ? 'is-active' : '')
                  }
                  key={'menu-' + i}
                  to={m.to}
                >
                  {m.name}
                </Link>
              );
            })}
          </div>
          <span className="nav-toggle" onClick={this.toggleMenu}>
            <span />
            <span />
            <span />
          </span>
          <div
            className={
              'nav-right nav-menu ' + (this.state.isActive ? 'is-active' : '')
            }
          >
            {menus.map((m, i) => {
              return (
                <Link
                  className={
                    'nav-item is-tab is-hidden-tablet is-primary ' +
                      (this.props.menuActive === m.id ? 'is-active' : '')
                  }
                  key={'mobile-menu-' + i}
                  to={m.to}
                >
                  {m.name}
                </Link>
              );
            })}
            <Link
              className={
                'nav-item is-tab is-primary ' +
                  (this.props.menuActive === 'team' ? 'is-active' : '')
              }
              to={'/team/' + this.state.teamId}
            >
              Mon equipe
            </Link>
            <Link
              className={
                'nav-item is-tab is-primary ' +
                  (this.props.menuActive === 'profile' ? 'is-active' : '')
              }
              to="/profile"
            >
              Profile
            </Link>
            <Link className="nav-item is-tab" onClick={this.logout} to="/">
              Log out
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
