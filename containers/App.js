var React = require('react');
var TodoApp = require('./TodoApp');
var Provider=require("react-redux").Provider;
var store = require('../stores/todos');

var App = React.createClass({
  render: function() {
    return (
      <Provider store={store}>
        {function() { return <TodoApp />; }}
      </Provider>
    );
  }
});

module.exports = App;
