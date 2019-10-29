const initialState = {
  userDetails: {
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
