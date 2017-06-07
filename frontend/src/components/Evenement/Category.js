import React, { Component } from 'react';
import Box from './../Box';

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indexSelected: null
    };
  }

  eventType = [
    {
      name: 'ballon',
      src: 'https://image.flaticon.com/icons/svg/167/167741.svg'
    },
    {
      name: 'ballon',
      src: 'https://image.flaticon.com/icons/svg/167/167739.svg'
    },
    {
      name: 'ballon',
      src: 'https://image.flaticon.com/icons/svg/164/164991.svg'
    },
    {
      name: 'ballon',
      src: 'https://image.flaticon.com/icons/svg/140/140400.svg'
    },
    {
      name: 'ballon',
      src: 'https://image.flaticon.com/icons/svg/140/140412.svg'
    },
    {
      name: 'ballon',
      src: 'https://image.flaticon.com/icons/svg/432/432275.svg'
    },
    {
      name: 'ballon',
      src: 'https://image.flaticon.com/icons/svg/140/140382.svg'
    }
  ];

  handleOnClick = e => {
    this.setState({ indexSelected: e });
    this.props.onSelected(this.eventType[e].name);
  };

  render() {
    return (
      <div className="columns is-multiline">
        {this.eventType.map((e, i) => {
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
    );
  }
}
