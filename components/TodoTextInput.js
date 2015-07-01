var React = require('react');
var PropTypes = React.PropTypes;
var classnames = require('classnames');

var TodoTextInput = React.createClass({
  propTypes: {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  },

  getInitialState: function() {
    return {
      text: this.props.text || ''
    };
  },

  handleSubmit: function(e) {
    var text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  },

  handleChange: function(e) {
    this.setState({ text: e.target.value });
  },

  handleBlur: function(e) {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  },

  render: function() {
    return (
      <input className={classnames({
              edit: this.props.editing,
              'new-todo': this.props.newTodo
             })}
             type='text'
             placeholder={this.props.placeholder}
             autoFocus='true'
             value={this.state.text}
             onBlur={this.handleBlur}
             onChange={this.handleChange}
             onKeyDown={this.handleSubmit} />
    );
  }
});

module.exports = TodoTextInput;
