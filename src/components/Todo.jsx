import { useState } from "react";
import styled from "styled-components";

const Todo = ({
  props,
  checkboxHandler,
  deleteHandler,
  modifySubmitHandler,
}) => {
  const [isModifying, setIsModifying] = useState(false);
  const [todoModify, setTodoModify] = useState(props.todo);

  const inputBoxHandler = e => setTodoModify(e.currentTarget.value);

  const modifyHandler = () => {
    setTodoModify(props.todo);
    setIsModifying(true);
  };

  const modifyCancelHandler = () => {
    setTodoModify(props.todo);
    setIsModifying(false);
  };

  return (
    <Li>
      <label>
        <input
          type="checkbox"
          checked={props.isCompleted}
          onChange={() =>
            checkboxHandler(props.id, props.todo, !props.isCompleted)
          }
          name={props.id}
        />
        {isModifying || <span>{props.todo}</span>}
      </label>
      {isModifying ? (
        <div>
          <input
            data-testid="modify-input"
            value={todoModify}
            onChange={inputBoxHandler}
          />
          <button
            data-testid="submit-button"
            onClick={() => {
              modifySubmitHandler(props.id, todoModify, props.isCompleted);
              setIsModifying(false);
            }}
          >
            제출
          </button>
          <button data-testid="cancel-button" onClick={modifyCancelHandler}>
            취소
          </button>
        </div>
      ) : (
        <div>
          <button data-testid="modify-button" onClick={modifyHandler}>
            수정
          </button>
          <button
            data-testid="delete-button"
            onClick={() => deleteHandler(props.id)}
          >
            삭제
          </button>
        </div>
      )}
    </Li>
  );
};

const Li = styled.li`
  display: flex;
  justify-content: space-between;
`;

export default Todo;
