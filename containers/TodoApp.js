var React = require('react');
var bindActionCreators = require('redux').bindActionCreators;
var connect=require("react-redux").connect;
var Header = require('../components/Header');
var MainSection = require('../components/MainSection');
var TodoActions = require('../actions/TodoActions');

var TodoApp = React.createClass({
  render: function() {
    var dispatch=this.props.dispatch;
    var todos=this.props.todos;
    var actions = bindActionCreators(TodoActions, dispatch);
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  },

});

function mapStateToProps(state) {
  return {
    todos: state
  };
}

module.exports = connect(mapStateToProps)(TodoApp);
