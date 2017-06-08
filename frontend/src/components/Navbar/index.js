import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import classNames from 'classnames';

import { logout } from '../../firebase';
import './Navbar.css';

const menus = {
  left: [
    {
      name: 'Dashboard',
      to: '/'
    },
    {
      name: 'Evenements',
      to: '/evenement'
    },
    {
      name: 'Découvrir',
      to: '/discover'
    }
  ],
  right: [
    {
      name: 'Historique',
      to: '/history'
    },
    {
      name: 'Profile',
      to: '/profile'
    }
  ]
};

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      redirect: false
    };
  }

  toggleMenu = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  logout = () => {
    logout().then(() => {
      this.setState({
        redirect: true
      });
    });
  };

  render() {
    const { redirect } = this.state;
    const { path } = this.props.match;

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <Link className="nav-item" to="/">
              <span className="title"><b>Meet'</b>In</span>
            </Link>

            {menus.left.map((m, i) =>
              <Link
                className={classNames(
                  'nav-item',
                  'is-tab',
                  'is-hidden-mobile',
                  'is-primary',
                  { 'is-active': path === m.to }
                )}
                key={'menu-' + i}
                to={m.to}
              >
                {m.name}
              </Link>
            )}
          </div>

          <span className="nav-toggle" onClick={this.toggleMenu}>
            <span />
            <span />
            <span />
          </span>

          <div
            className={classNames('nav-right', 'nav-menu', {
              'is-active': this.state.isActive
            })}
          >
            {menus.left.map((m, i) =>
              <Link
                className={classNames(
                  'nav-item',
                  'is-tab',
                  'is-hidden-tablet',
                  'is-primary',
                  { 'is-active': path === m.to }
                )}
                key={'mobile-menu-' + i}
                to={m.to}
              >
                {m.name}
              </Link>
            )}

            {menus.right.map((m, i) =>
              <Link
                className={classNames('nav-item', 'is-tab', 'is-primary ', {
                  'is-active': path === m.to
                })}
                key={'menu-' + i}
                to={m.to}
              >
                {m.name}
              </Link>
            )}

            <Link className="nav-item is-tab" onClick={this.logout} to="/">
              Log out
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
