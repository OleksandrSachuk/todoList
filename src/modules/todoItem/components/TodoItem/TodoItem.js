import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import EditableTodoItem from '../EditableTodoItem';
import GreenCheckbox from '../../../common/components/GreenCheckbox';
import styles from './styles';

const TodoItem = ({ classes, item, changeCheckStatusTodoItem, removeTodoItem, changeTodoItemText }) =>
  (<div className={classes.todoItem}>
        <GreenCheckbox
          checked={item.checked}
          onChange={()=>changeCheckStatusTodoItem(item.id)}
          inputProps={{
            'aria-label': 'primary checkbox',
          }}
        />
        <div className={classes.todoItemRow}
        >
          <EditableTodoItem
            key={item.id}
            item={item}
            onSubmit={(id, text) => changeTodoItemText(id, text)}
          />
        </div>
        <DeleteIcon
          color="primary"
          onClick={()=>removeTodoItem(item.id)}
        />
      </div>
    );

TodoItem.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object,
  changeCheckStatusTodoItem: PropTypes.func,
  removeTodoItem: PropTypes.func,
};

TodoItem.defaultProps = {
  item: {},
  changeCheckStatusTodoItem: () => null,
  removeTodoItem: () => null,
};

export default withStyles(styles)(TodoItem);
