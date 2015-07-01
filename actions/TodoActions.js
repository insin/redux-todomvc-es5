var types = require('../constants/ActionTypes');

module.exports.addTodo = function addTodo(text) {
  return {
    type: types.ADD_TODO,
    text: text
  };
}

module.exports.deleteTodo = function deleteTodo(id) {
  return {
    type: types.DELETE_TODO,
    id: id
  };
}

module.exports.editTodo = function editTodo(id, text) {
  return {
    type: types.EDIT_TODO,
    id: id,
    text: text
  };
}

module.exports.markTodo = function markTodo(id) {
  return {
    type: types.MARK_TODO,
    id: id
  };
}

module.exports.markAll = function markAll() {
  return {
    type: types.MARK_ALL
  };
}

module.exports.clearMarked = function clearMarked() {
  return {
    type: types.CLEAR_MARKED
  };
}
