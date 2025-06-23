import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/TodoSlice";

const DisplayTodos = () => {
  const data = useSelector((state) => state.Todos); // use correct path
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            marginTop: "30px",
            border: "2px solid gray",
            width: "600px",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <p>{item.text}</p>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => remove(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
};

export default DisplayTodos;
