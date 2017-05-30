import React, { Component } from 'react';
import NavBar from './../Navbar';
import TitleBar from './../TitleBar';
import Box from './../Box';

class Evenement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indexSelected: null
    };
  }

  handleOnClick = e => {
    console.log(e);
    this.setState({ indexSelected: e });
  };

  render() {
    const eventType = [
      {
        name: 'ballon',
        src: 'https://image.flaticon.com/icons/svg/167/167741.svg'
      },
      {
        name: 'ballon',
        src: 'https://image.flaticon.com/icons/svg/167/167741.svg'
      },
      {
        name: 'ballon',
        src: 'https://image.flaticon.com/icons/svg/167/167741.svg'
      },
      {
        name: 'ballon',
        src: 'https://image.flaticon.com/icons/svg/167/167741.svg'
      },
      {
        name: 'ballon',
        src: 'https://image.flaticon.com/icons/svg/167/167741.svg'
      },
      {
        name: 'ballon',
        src: 'https://image.flaticon.com/icons/svg/167/167741.svg'
      },
      {
        name: 'ballon',
        src: 'https://image.flaticon.com/icons/svg/167/167741.svg'
      }
    ];

    return (
      <div>
        <NavBar menuActive="events" />
        <TitleBar title="Choisissez votre icone" />
        <div className="container">
          <div className="columns column is-7 is-offset-3 is-multiline">
            {eventType.map((e, i) => {
              return (
                <Box
                  image={e.src}
                  isSelect={this.state.indexSelected === i}
                  key={i}
                  onClick={() => {
                    this.handleOnClick(i);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Evenement;
