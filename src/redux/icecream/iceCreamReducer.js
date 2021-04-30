import { BUY_ICECREAM } from "./iceCreamTypes";

const initialstate = {
  numberOfIceCream: 50,
};

const iceCreamReducer = (state = initialstate, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
