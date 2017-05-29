import React, { Component } from 'react';
import NavBar from './../Navbar';
import TitleBar from './../TitleBar';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <NavBar menuActive="home" />
        <TitleBar title="Title" />
        <h1>It's work</h1>
      </div>
    );
  }
}

export default Dashboard;
