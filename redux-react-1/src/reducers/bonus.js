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
export const bonusReducer = (state = { points: 0 }, action) => {
  switch (action.type) {
    case INCREMENT_BONUS:
      return {
        ...state,
        points: state.points + 1,
      };
    case INCREMENTBYAMOUNT:
      if (action.payload >= 100) {
        return {
          ...state,
          points: state.points + 1,
        };
      }

    default:
      return state;
  }
};
