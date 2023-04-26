import axios from "axios";
export const INCREMENT = "account/increment";
export const DECREMENT = "account/decrement";
export const INCREMENTBYAMOUNT = "account/incrementByAmount";
export const getAccUserPending = "account/getUser/pending";
export const getAccUserFulFilled = "account/getUser/fullfilled";
export const getAccUserRejected = "account/getUser/rejected";
export const INIT = "account/init";
export const INCREMENT_BONUS = "bonus/increment";
export const getUserAccount = (id) => {
  return async (dispatch, getState) => {
    console.log("called");
    try {
      dispatch(getAccountUserPending());
      const { data } = await axios.get(`http://localhost:8080/account/${id}`);
      dispatch(getAccountUserFulFilled(data.amount));
    } catch (error) {
      dispatch(getAccountUserRejected(error.message));
    }
  };
};
export const initUser = (value) => {
  return { type: INIT, payload: value };
};
export const increment = () => {
  return { type: INCREMENT };
};
export const decrement = () => {
  return { type: DECREMENT };
};
export const incrementByAmount = (value) => {
  return { type: INCREMENTBYAMOUNT, payload: value };
};
export const Increment_bonus = () => {
  return { type: INCREMENT_BONUS };
};

export function getAccountUserFulFilled(value) {
  return { type: getAccUserFulFilled, payload: value };
}
export function getAccountUserRejected(error) {
  return { type: getAccUserRejected, error: error };
}
export function getAccountUserPending() {
  return { type: getAccUserPending };
}
