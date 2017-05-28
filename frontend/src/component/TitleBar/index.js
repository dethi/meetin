import React, { Component } from 'react'
import './TitleBar.css'

class TitleBar extends Component {
  render() {
    const box = {
      backgroundColor: '#FF874E',
      marginTop: '5px'
    }

    return (
      <section className="hero is-primary" style={box}>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              {this.props.title}
            </h1>
          </div>
        </div>
      </section>
    )
  }
}

export default TitleBar
