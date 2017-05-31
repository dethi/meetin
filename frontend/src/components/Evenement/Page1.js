import React, { Component } from 'react';
import Box from './../Box';

class Evenement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indexSelected: null
    };
  }

  handleOnClick = e => {
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
        <div className="container">
          <div className="columns" style={{ margin: '0 auto' }}>
            <div className="column is-mobile is-8 is-center">
              <div className="columns is-multiline is-mobile">
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
        </div>

      </div>
    );
  }
}

export default Evenement;
