import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import firebase from 'firebase'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirect: false,
      hasError: false,
      errorMsg: ''
    }

    this.logout = this.logout.bind(this)
  }

  logout(e) {
    e.preventDefault()
    firebase.auth().signOut().then(() => {
      this.setState({
        redirect: true,
        hasError: false,
        errorMsg: ''
      })
    })
  }

  render() {
    const { redirect } = this.state

    if (redirect) {
      return <Redirect to="/" />
    }

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
            <Link className="nav-item is-tab" to="/profile">
              <figure className="image is-16x16" style={{ marginRight: '8px' }}>
                <img src="http://bulma.io/images/jgthms.png" alt="" />
              </figure>
              Profile
            </Link>
            <Link className="nav-item is-tab" onClick={this.logout} to="/">
              Log out
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
