import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TodoItem from '../TodoItem/TodoItem';
import EditableTodoItem from '../EditableTodoItem/EditableTodoItem';
import styles from './styles';

class TodoItemsList extends PureComponent {
  state={
    active: false
  };

  onSubmitTodoItemChange = (id, text)=> {
    const {changeTodoItemText} = this.props;
    changeTodoItemText(id, text);
    this.setState((prevState)=>({active: !prevState.active}));
  };

  render() {
    const {
      classes,
      items,
      removeTodoItem,
      changeCheckStatusTodoItem
    } = this.props;

    const {active} = this.state;

    return (
      <div>
        {items.map((item)=>(
          active
            ? <EditableTodoItem
                key={item.id}
                item={item}
                onSubmit={this.onSubmitTodoItemChange}
              />
            : <div
              key={item.id}
              onClick={()=> this.setState((prevState)=>({active: !prevState.active}))}
            >
              <TodoItem
                item={item}
                changeCheckStatusTodoItem={changeCheckStatusTodoItem}
                removeTodoItem={removeTodoItem}
              />
              </div>
        ))}
      </div>
    )
  }
}

TodoItemsList.propTypes = {};

export default withStyles(styles)(TodoItemsList);
