import React from "react";
import { TodoForm } from "../../UI/TodoForm";
import { useTodos } from "../useTodos";

function NewTodoPage() {

    const { state, stateUpdaters } = useTodos();
    const { addTodo } = stateUpdaters;
    const { loading } = state;
    return (
        <TodoForm 
            loading={loading}
            label="Escribe tu nuevo TODO"
            submitText="Agregar"
            submitEvent={(text) => addTodo(text)}
      />
  )
}

export { NewTodoPage };
