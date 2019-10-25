import uuid from 'uuid/v1';

import { ADD_TODO_ITEM } from './constants';

const todoItem = {
  id: uuid(),
  checked: false,
  text:''
};

export const addTodoItem = () => ({
  type:ADD_TODO_ITEM,
  payload: todoItem
});
