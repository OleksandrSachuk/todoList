const initialState = {
  todoList: [{
    id: 1,
    title: 'Team To-Do List'
  }],
};

export default function (state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}
