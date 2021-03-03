import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";
import { decrement, increment } from "./testReducer";

export default function SandBox() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.test.data);

  return (
    <>
      <h1>Testing 1 2 3</h1>
      <h3>The data is: {data} </h3>
      <Button
        onClick={() => dispatch(increment(20))}
        content="Increment"
        color="green"
      />
      <Button
        onClick={() => dispatch(decrement(10))}
        content="decrement"
        color="red"
      />
      <Button
        onClick={() =>
          dispatch(openModal({ modalType: "TestModal", modalProps: { data } }))
        }
        content="Open modal"
        color="teal"
      />
    </>
  );
}
