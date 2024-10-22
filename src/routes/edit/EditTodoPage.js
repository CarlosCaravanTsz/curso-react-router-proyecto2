import React from "react";
import { TodoForm } from "../../UI/TodoForm";
import { useTodos } from "../useTodos";
import { useLocation, useParams } from "react-router-dom";

function EditTodoPage() {

  const { state, stateUpdaters } = useTodos();
  const {loading, getTodo} = state;
  const { editTodo } = stateUpdaters;
  const { id } = useParams();
  const location = useLocation();


  let todoText;

  if (location?.state) {
    todoText = location.state;
  } else if (loading) {
    return <p>Cargando...</p>
  } else {
    const todo = getTodo(id);
    todoText = todo.text;
  }

  return (
    <TodoForm
      label="Edita tu TODO"
      defaultTodoTex={todoText}
      submitText="Editar"
      submitEvent={(newText) => editTodo(id, newText)}
    />
  );  


}

export { EditTodoPage };
  
