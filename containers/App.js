var React = require('react');
var TodoApp = require('./TodoApp');
var createRedux = require('redux').createRedux;
var Provider = require('redux/react').Provider;
var stores = require('../stores');

var redux = createRedux(stores);

var App = React.createClass({
  render: function() {
    return (
      <Provider redux={redux}>
        {function() { return <TodoApp />; }}
      </Provider>
    );
  }
});

module.exports = App;
