import React from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './styles';

const TodoItem = ({
                    classes,
                    item,
                    changeCheckStatusTodoItem,
                    removeTodoItem
}) => (
  <div>
    <Checkbox
      checked={item.checked}
      onChange={()=>changeCheckStatusTodoItem(item.id)}
      inputProps={{
        'aria-label': 'primary checkbox',
      }}
    />
    <div className={classnames({
      [classes.active]: item.checked
    })}>
      {item.text}
    </div>
    <DeleteIcon onClick={()=>removeTodoItem(item.id)}/>
  </div>
  );

TodoItem.propTypes = {};

export default withStyles(styles)(TodoItem);
