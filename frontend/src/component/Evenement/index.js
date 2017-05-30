import React, { Component } from 'react';
import NavBar from './../Navbar';
import TitleBar from './../TitleBar';
import Box from './../Box';

class Evenement extends Component {
  render() {
    return (
      <div>
        <NavBar menuActive="events" />
        <TitleBar title="Choisissez votre évenement" />
        <div className="container">
          <div className="columns column is-7 is-offset-3 is-multiline">
            <Box image="https://image.flaticon.com/icons/svg/167/167741.svg" />
            <Box image="https://image.flaticon.com/icons/svg/167/167741.svg" />
            <Box image="https://image.flaticon.com/icons/svg/167/167741.svg" />

            <Box image="https://image.flaticon.com/icons/svg/167/167741.svg" />
            <Box image="https://image.flaticon.com/icons/svg/167/167741.svg" />
            <Box image="https://image.flaticon.com/icons/svg/167/167741.svg" />

            <Box image="https://image.flaticon.com/icons/svg/167/167741.svg" />
            <Box image="https://image.flaticon.com/icons/svg/167/167741.svg" />
            <Box image="https://image.flaticon.com/icons/svg/167/167741.svg" />

            <Box image="https://image.flaticon.com/icons/svg/167/167741.svg" />
            <Box image="https://image.flaticon.com/icons/svg/167/167741.svg" />
            <Box image="https://image.flaticon.com/icons/svg/167/167741.svg" />

            <Box image="https://image.flaticon.com/icons/svg/167/167741.svg" />
            <Box image="https://image.flaticon.com/icons/svg/167/167741.svg" />
            <Box image="https://image.flaticon.com/icons/svg/167/167741.svg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Evenement;
