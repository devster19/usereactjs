import React, { useReducer } from "react";
import { initialState, reducer } from "../reducers/todo.reducer";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

export default function Play() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
  <>
    <h1>Use Reducer API</h1>  
    <AddTodo
      add={text => dispatch({type: "add", text: text})}
    />
    {state.todos.map(t => (
      <Todo
        key={t.id}
        todo={t}
        remove={() => dispatch({type: "remove", id: t.id})}
        edit={text => dispatch({type: "edit", id: t.id, text: text})}
      />
    ))}
  </>);
  }