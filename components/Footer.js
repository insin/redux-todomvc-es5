var React = require('react');
var PropTypes = React.PropTypes;
var classnames = require('classnames');
var filters = require('../constants/TodoFilters');

var SHOW_ALL = filters.SHOW_ALL;
var SHOW_UNMARKED = filters.SHOW_UNMARKED;
var SHOW_MARKED = filters.SHOW_MARKED;

var FILTER_TITLES = {};
FILTER_TITLES[SHOW_ALL] = 'All';
FILTER_TITLES[SHOW_UNMARKED] = 'Active';
FILTER_TITLES[SHOW_MARKED] = 'Completed';

var Footer = React.createClass({
  propTypes: {
    markedCount: PropTypes.number.isRequired,
    unmarkedCount: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    onClearMarked: PropTypes.func.isRequired,
    onShow: PropTypes.func.isRequired
  },

  render: function() {
    return (
      <footer className='footer'>
        {this.renderTodoCount()}
        <ul className='filters'>
          {[SHOW_ALL, SHOW_UNMARKED, SHOW_MARKED].map(function(filter) {
            return (
              <li key={filter}>
                {this.renderFilterLink(filter)}
              </li>
            );
          }, this)}
        </ul>
        {this.renderClearButton()}
      </footer>
    );
  },

  renderTodoCount() {
    var unmarkedCount = this.props.unmarkedCount;
    const itemWord = unmarkedCount === 1 ? 'item' : 'items';

    return (
      <span className='todo-count'>
        <strong>{unmarkedCount || 'No'}</strong> {itemWord} left
      </span>
    );
  },

  renderFilterLink(filter) {
    var title = FILTER_TITLES[filter];
    var selectedFilter = this.props.selectedFilter;
    var onShow = this.props.onShow;

    return (
      <a className={classnames({ selected: filter === selectedFilter })}
         style={{ cursor: 'hand' }}
         onClick={function() { onShow(filter) }}>
        {title}
      </a>
    );
  },

  renderClearButton() {
    var markedCount = this.props.markedCount;
    var onClearMarked = this.props.onClearMarked;
    if (markedCount > 0) {
      return (
        <button className='clear-completed'
                onClick={onClearMarked} >
          Clear completed
        </button>
      );
    }
  }
});

module.exports = Footer
