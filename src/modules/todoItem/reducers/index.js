import {
  ADD_TODO_ITEM,
  CHANGE_CHECK_STATUS_TODO_ITEM,
  CHANGE_TODO_ITEM_TEXT,
  REMOVE_TODO_ITEM,
} from '../actions/constants';

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {

    case ADD_TODO_ITEM:
      const {todoItem} = action.payload;
      return {
        ...state,
        items:[...state.items, todoItem],
      };

      case REMOVE_TODO_ITEM: {
        const {id} = action.payload;
        return {
          ...state,
          items: state.items.filter((item)=>item.id !==id),
        };
      }

    case CHANGE_CHECK_STATUS_TODO_ITEM: {
      const {id} = action.payload;
      return {
        ...state,
        items: state.items.map((item)=>item.id ===id ? {...item, checked: !item.checked} : item),
      };
    }

    case CHANGE_TODO_ITEM_TEXT: {
      const {id, text} = action.payload;
      return {
        ...state,
        items: state.items.map((item)=>item.id ===id ? {...item, text} : item),
      };
    }

    default:
      return state;
  }
}
