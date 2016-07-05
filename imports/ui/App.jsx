import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Items } from '../api/items.js';

import Item from './Item.jsx';

// App component - represents the whole app
class App extends Component {
  
	handleSubmit(event) {
		event.preventDefault();
		console.log('Derp');
		// Find the text
		const itemTitle = ReactDOM.findDOMNode(this.refs.titleInput).value.trim();
		const itemDesc = ReactDOM.findDOMNode(this.refs.descInput).value.trim();

		Items.insert({
			itemTitle,
			itemDesc,
			createdAt: new Date(),
		});

		//Clear the form
		ReactDOM.findDOMNode(this.refs.titleInput).value = ' ';
		ReactDOM.findDOMNode(this.refs.descInput).value = ' ';
	}	

  renderItems() {
    return this.props.items.map((item) => (
      <Item key={item._id} item={item} /> 
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>hiddenGems</h1>
        </header>

        <form className="new-item" onSubmit={this.handleSubmit.bind(this)} >
        	<input type="text" ref="titleInput" placeholder="Type here to add title" />
        	<input type="text" ref="descInput" placeholder="Type here to add item description" />
        </form>

        <ul>
          {this.renderItems()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  items: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    items: Items.find({}, { sort: {createdAt: -1 } }).fetch(),
  };
}, App);