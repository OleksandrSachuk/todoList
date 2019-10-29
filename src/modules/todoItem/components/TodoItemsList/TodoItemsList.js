import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TodoItem from '../TodoItem';
import styles from './styles';

class TodoItemsList extends PureComponent {

  render() {
    const {
      classes,
      items,
    } = this.props;

    return (
      <div className={classes.todoItemsList}>
        {items.map((item)=>(<TodoItem key={item.id} item={item} />))}
      </div>
    )
  }
}

TodoItemsList.propTypes = {
  items: PropTypes.array,
};

TodoItemsList.defaultProps = {
  items: [],
};

export default withStyles(styles)(TodoItemsList);
