import React, { Component } from 'react'

class TitleBar extends Component {
  render() {
    return (
      <section className="hero is-primary">
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
