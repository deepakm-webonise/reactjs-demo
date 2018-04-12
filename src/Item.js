import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  render() {
    return (
      <li>{this.props.description}</li>
    );
  }
}

Item.propTypes = {
  description: PropTypes.string
}

export default Item;
