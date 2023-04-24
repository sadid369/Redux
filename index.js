import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";
const history = [];
//action name constant
const INCREMENT = "account/increment";
const DECREMENT = "account/decrement";
const INCREMENTBYAMOUNT = "account/incrementByAmount";
const INIT = "account/init";
const INCREMENT_BONUS = "bonus/increment";
//reducer
const accountReducer = (state = { amount: 1 }, action) => {
  switch (action.type) {
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

const bonusReducer = (state = { points: 0 }, action) => {
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

//Async API call

// async function getUser() {
//   const { data } = await axios.get("http://localhost:3000/account/1");
// }
// getUser();
//Action creator
const getUser = (id) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3000/account/${id}`);
    dispatch(initUser(data.amount));
  };
};
const initUser = (value) => {
  return { type: INIT, payload: value };
};
const increment = () => {
  return { type: INCREMENT };
};
const decrement = () => {
  return { type: DECREMENT };
};
const incrementByAmount = (value) => {
  return { type: INCREMENTBYAMOUNT, payload: value };
};
const Increment_bonus = () => {
  return { type: INCREMENT_BONUS };
};
//store
const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger.default, thunk.default)
);

//global state
// store.subscribe(() => {
//   history.push(store.getState());
//   console.log(history);
// });

setTimeout(() => {
  store.dispatch(Increment_bonus());
}, 1000);

// console.log(store.getState());
// store.dispatch({ type: "increment" });
// console.log(store.getState());
