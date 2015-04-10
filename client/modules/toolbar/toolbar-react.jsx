'use strict';

var React = require('react');

module.exports = React.createClass({
  displayname: 'Names',

  clickItem: function(e){
    console.log(e.target.textContent);
  },

  render: function(){

    var createItem = function(item, index){
      return <li onClick={this.clickItem}>{item}</li>
    };

    return (
      <ul>{this.props.namesList.map(createItem.bind(this))}</ul>
    )
  }
});
