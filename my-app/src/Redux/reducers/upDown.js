const IS = 0;

const changeTheNumber = (state = IS, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;
    case "Add":
      return state + action.payload;
    case "odd":
      if (action.payloadOdd % 2 != 0) {
        return state + action.payloadOdd;
      }
     

    default:
      return state;
  }
};
export default changeTheNumber;
