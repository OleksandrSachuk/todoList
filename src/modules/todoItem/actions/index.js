import uuid from 'uuid/v1';

import { ADD_TODO_ITEM, CHANGE_CHECK_STATUS_TODO_ITEM, REMOVE_TODO_ITEM, CHANGE_TODO_ITEM_TEXT } from './constants';

export const addTodoItem = () => ({
  type:ADD_TODO_ITEM,
  payload: {
    todoItem: {
      id: uuid(),
      checked: false,
      text: ''
    }
  }
});

export const removeTodoItem = (id) => ({
  type:REMOVE_TODO_ITEM,
  payload: {
    id
  }
});

export const changeCheckStatusTodoItem = (id) => ({
  type:CHANGE_CHECK_STATUS_TODO_ITEM,
  payload: {
    id
  }
});

export const changeTodoItemText = (id, text) => ({
  type:CHANGE_TODO_ITEM_TEXT,
  payload: {
    id,
    text
  }
});
