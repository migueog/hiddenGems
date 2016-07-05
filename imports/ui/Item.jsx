import React, { Component, PropTypes } from 'react';
import { Items } from '../api/items.js';

// Task component - represents a single todo item
export default class Item extends Component {
  
  render() {
    return (
      <li><p>{this.props.item.itemTitle}</p><p>{this.props.item.itemDesc}</p></li>
    );
  }
}

Item.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  item: PropTypes.object.isRequired,
};