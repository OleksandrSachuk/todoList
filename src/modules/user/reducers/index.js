const initialState = {
  userDetails: {
    img: '',
    firstName: "Oleksandr",
    lastName: 'Sachuk'
  },
};

export default function (state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}
