import React, { Component } from 'react';
import Box from './../Box';

import categories from './../../categories';

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indexSelected: null
    };
  }

  eventType = Object.keys(categories).map(function(key) {
    return { name: key, src: categories[key] };
  });

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
