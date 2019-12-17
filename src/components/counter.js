import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {increaseCount, decreaseCount} from "../actions";
import '../style/main.css'

export default function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(decreaseCount())}>-</button>
      <button onClick={() => dispatch(increaseCount())}>+</button>
      <h1>{count} </h1>
    </>
  )
}