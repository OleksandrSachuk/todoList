import dayjs from 'dayjs';

const initialState = {
  items: [{
    id: 1,
    title: 'Team To-Do List',
    date: dayjs().format("ddd DD MMMM")
  }],
  selectedId: 1
};

export default function (state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}
