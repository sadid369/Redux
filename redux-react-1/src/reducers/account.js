import {
  getAccUserFulFilled,
  getAccUserPending,
  getAccUserRejected,
  INIT,
  INCREMENT,
  DECREMENT,
  INCREMENTBYAMOUNT,
  INCREMENT_BONUS,
} from "../actions";
export const accountReducer = (state = { amount: 1 }, action) => {
  switch (action.type) {
    case getAccUserFulFilled: 
      return { amount: action.payload, pending: false };
    case getAccUserRejected:
      return { ...state, error: action.error, pending: false };
    case getAccUserPending:
      return { ...state, pending: true };
    case INIT:
      return {
        ...state,
        amount: action.payload,
      };
    case INCREMENT:
      return {
        ...state,
        amount: state.amount + 1,
      };
    case DECREMENT:
      return {
        ...state,
        amount: state.amount - 1,
      };
    case INCREMENTBYAMOUNT:
      return {
        ...state,
        amount: state.amount + action.payload,
      };

    default:
      return state;
  }
};
