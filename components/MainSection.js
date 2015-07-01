var React = require('react');
var PropTypes = React.PropTypes;
var TodoItem = require('./TodoItem');
var Footer = require('./Footer');
var filters = require('../constants/TodoFilters');

var SHOW_ALL = filters.SHOW_ALL;
var SHOW_UNMARKED = filters.SHOW_UNMARKED;
var SHOW_MARKED = filters.SHOW_MARKED;

var TODO_FILTERS = {};
TODO_FILTERS[SHOW_ALL] = function() { return true };
TODO_FILTERS[SHOW_UNMARKED] = function(todo) { return !todo.marked };
TODO_FILTERS[SHOW_MARKED] = function(todo) { return todo.marked };

var MainSection = React.createClass({
  propTypes: {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      filter: SHOW_ALL
    };
  },

  handleClearMarked: function() {
    const atLeastOneMarked = this.props.todos.some(function(todo) { return todo.marked });
    if (atLeastOneMarked) {
      this.props.actions.clearMarked();
    }
  },

  handleShow: function(filter) {
    this.setState({ filter: filter });
  },

  render: function() {
    var todos = this.props.todos;
    var actions = this.props.actions;
    var filter = this.state.filter;

    var filteredTodos = todos.filter(TODO_FILTERS[filter]);
    var markedCount = todos.reduce(function(count, todo) {
        return todo.marked ? count + 1 : count;
      },
      0
    );

    return (
      <section className='main'>
        {this.renderToggleAll(markedCount)}
        <ul className='todo-list'>
          {filteredTodos.map(function(todo) {
            return <TodoItem key={todo.id} todo={todo} {...actions} />
          })}
        </ul>
        {this.renderFooter(markedCount)}
      </section>
    );
  },

  renderToggleAll: function(markedCount) {
    var todos = this.props.todos;
    var actions = this.props.actions;
    if (todos.length > 0) {
      return (
        <input className='toggle-all'
               type='checkbox'
               checked={markedCount === todos.length}
               onChange={actions.markAll} />
      );
    }
  },

  renderFooter: function(markedCount) {
    var todos = this.props.todos;
    var filter = this.state.filter;
    var unmarkedCount = todos.length - markedCount;

    if (todos.length) {
      return (
        <Footer markedCount={markedCount}
                unmarkedCount={unmarkedCount}
                filter={filter}
                onClearMarked={this.handleClearMarked}
                onShow={this.handleShow} />
      );
    }
  }
});

module.exports = MainSection;
