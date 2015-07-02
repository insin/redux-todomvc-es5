var React = require('react');
var PropTypes = React.PropTypes;
var classnames = require('classnames');
var TodoTextInput = require('./TodoTextInput');

var TodoItem = React.createClass({
  propTypes: {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    markTodo: PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      editing: false
    };
  },

  handleDoubleClick: function() {
    this.setState({ editing: true });
  },

  handleSave: function(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  },

  render: function() {
    var todo = this.props.todo;
    var markTodo = this.props.markTodo;
    var deleteTodo = this.props.deleteTodo;
    var editTodo = this.props.editTodo;

    var element;
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                       editing={this.state.editing}
                       onSave={this.handleSave.bind(this, todo.id)} />
      );
    } else {
      element = (
        <div className='view'>
          <input className='toggle'
                 type='checkbox'
                 checked={todo.marked}
                 onChange={markTodo.bind(null, todo.id)} />
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>
          <button className='destroy'
                  onClick={deleteTodo.bind(null, todo.id)} />
        </div>
      );
    }

    return (
      <li className={classnames({
        completed: todo.marked,
        editing: this.state.editing
      })}>
        {element}
      </li>
    );
  }
});

module.exports = TodoItem;
