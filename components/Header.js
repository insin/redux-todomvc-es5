var React = require('react');
var PropTypes = React.PropTypes;
var TodoTextInput =require('./TodoTextInput');

var Header = React.createClass({
  propTypes: {
    addTodo: PropTypes.func.isRequired
  },

  handleSave: function(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  },

  render: function() {
    return (
      <header className='header'>
          <h1>todos</h1>
          <TodoTextInput newTodo={true}
                         onSave={this.handleSave}
                         placeholder='What needs to be done?' />
      </header>
    );
  }
});

module.exports = Header;
