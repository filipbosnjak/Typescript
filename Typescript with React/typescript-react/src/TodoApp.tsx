import React, { useReducer, useState } from "react";
import { idText } from "typescript";

const TodoApp = () => {
  interface Todo {
    todo: string;
    id: number;
    completed: boolean;
  }
  const initialState: Todo[] = [
    { todo: "Todo 1", id: Date.now(), completed: false },
  ];

  type actionType = {
    type: string;
    payload: any;
  };
  type reducerType = (state: Todo[], action: actionType) => Todo[];
  const initializer = (args: Todo[]) => {
    return args;
  };

  const reducer = (state: Todo[], action: actionType) => {
    switch (action.type) {
      case "ADD_TODO":
        return [...state, action.payload];
      case "COMPLETED":
        return state.map((todo, index) => {
          return index === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo;
        });
      case "DELETE":
        return state.filter((todo, index) => {
          return index !== action.payload;
        });
      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer<reducerType, Todo[]>(
    reducer,
    initialState,
    initializer
  );

  const [newTodo, setNewTodo] = useState("");

  type changeType = (event: React.ChangeEvent<HTMLInputElement>) => void; //(event: React.ChangeEvent<HTMLInputElement>) => void;

  type submitType = (event: React.FormEvent<HTMLFormElement>) => void;

  const handleChange: changeType = (e) => {
    e.preventDefault();
    setNewTodo(e.target.value);
  };
  const handleSubmit: submitType = (e) => {
    e.preventDefault();
    console.log("handleSubmit");

    dispatch({
      type: "ADD_TODO",
      payload: {
        todo: newTodo,
        id: Date.now(),
        completed: false,
      },
    });
    setNewTodo("");
  };
  console.log(todos);
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={handleChange} />
        <div>{newTodo}</div>
        <button type="submit">Add Todo</button>
      </form>
      <div>
        {todos.map((todo, index) => {
          return (
            <div className="todo" key={todo.id}>
              <div
                className={todo.completed ? "compl" : "notCompl"}
                onClick={() => {
                  dispatch({
                    type: "COMPLETED",
                    payload: index,
                  });
                }}
              >
                {todo.todo}
              </div>
              <button
                onClick={() => {
                  dispatch({
                    type: "DELETE",
                    payload: index,
                  });
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default TodoApp;
