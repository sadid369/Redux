import { useState } from "react";
import { Increment_bonus } from "../actions";
import { useSelector, useDispatch } from "react-redux";
function Bonus({ store }) {
  const points = useSelector((state) => state.bonus.points);
  const amount = useSelector((state) => state.account.amount);
  const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point :{points} </h3>
        <h3>Total Amount :{amount} </h3>

        <button
          onClick={() => {
            dispatch(Increment_bonus());
          }}
        >
          Increment +
        </button>
      </div>
    </div>
  );
}

export default Bonus;
