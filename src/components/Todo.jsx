import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Todo = ({
  props,
  onChangeHandlerCheckbox,
  onClickHandlerDelete,
  onClicktHandlerModify,
}) => {
  const [isModifying, setIsModifying] = useState(false);
  const [todoModify, setTodoModify] = useState(props.todo);

  const inputBoxHandler = e => setTodoModify(e.currentTarget.value);

  const onClickHandlerModifyBtn = () => {
    setTodoModify(props.todo);
    setIsModifying(true);
  };

  const onClickHandlerModifyCancel = () => {
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
            onChangeHandlerCheckbox(props.id, props.todo, !props.isCompleted)
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
              onClicktHandlerModify(props.id, todoModify, props.isCompleted);
              setIsModifying(false);
            }}
          >
            제출
          </button>
          <button
            data-testid="cancel-button"
            onClick={onClickHandlerModifyCancel}
          >
            취소
          </button>
        </div>
      ) : (
        <div>
          <button data-testid="modify-button" onClick={onClickHandlerModifyBtn}>
            수정
          </button>
          <button
            data-testid="delete-button"
            onClick={() => onClickHandlerDelete(props.id)}
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

// export default  Todo;
export default React.memo(Todo, (prev, next) => prev.props === next.props);
