import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  // const onClickButton = () => {
  //   props.setOpenModal(prevState => !prevState);
  // };

  return (
    <button
      className="CreateTodoButton"
      //onClick={onClickButton}
      onClick = {props.onClick}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
