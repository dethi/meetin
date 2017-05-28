import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">
              <span className="title"><b>Meet'</b>In</span>
            </a>
            <a className="nav-item is-tab is-hidden-mobile is-active">
              Accueil
            </a>
            <a className="nav-item is-tab is-hidden-mobile">Evenements</a>
            <a className="nav-item is-tab is-hidden-mobile">Pricing</a>
            <a className="nav-item is-tab is-hidden-mobile">About</a>
          </div>
          <span className="nav-toggle">
            <span />
            <span />
            <span />
          </span>
          <div className="nav-right nav-menu">
            <a className="nav-item is-tab is-hidden-tablet is-active">Home</a>
            <a className="nav-item is-tab is-hidden-tablet">Features</a>
            <a className="nav-item is-tab is-hidden-tablet">Pricing</a>
            <a className="nav-item is-tab is-hidden-tablet">About</a>
            <a className="nav-item is-tab">
              <figure className="image is-16x16" style={{ marginRight: '8px' }}>
                <img src="http://bulma.io/images/jgthms.png" alt="" />
              </figure>
              Profile
            </a>
            <a className="nav-item is-tab">Log out</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
