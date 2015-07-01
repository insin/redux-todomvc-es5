var React = require('react');
var bindActionCreators = require('redux').bindActionCreators;
var Connector = require('redux/react').Connector;
var Header = require('../components/Header');
var MainSection = require('../components/MainSection');
var TodoActions = require('../actions/TodoActions');

var TodoApp = React.createClass({
  render: function() {
    return (
      <Connector select={function(state) { return {todos: state.todos} }}>
        {this.renderChild}
      </Connector>
    );
  },

  renderChild: function(state) {
    var actions = bindActionCreators(TodoActions, state.dispatch);
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={state.todos} actions={actions} />
      </div>
    );
  }
});

module.exports = TodoApp;
