import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Main, Page, Title } from "../components/Form";
import Todo from "../components/Todo";
import { deleteTodo, getTodos, postTodo, putTodo } from "../api";
import { isLogin } from "../helpers";
import { ROUTE_PATH } from "../constants";

const Todolist = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const navigation = useNavigate();

  const onChangeHandlerTodo = e => {
    setTodo(e.currentTarget.value);
  };

  const onClickHandlerAddTodo = async () => {
    try {
      if (todo.trim() === "") return;
      const { data } = await postTodo(todo);
      setTodos(prev => [...prev, data]);
      setTodo("");
    } catch (err) {
      console.error("투두 추가 에러", err);
    }
  };

  const onChangeHandlerCheckbox = useCallback(async (id, todo, isCompleted) => {
    try {
      const { data } = await putTodo(id, todo, isCompleted);
      setTodos(prev =>
        prev.map(el => {
          if (el.id !== data.id) return el;
          return { ...el, isCompleted: data.isCompleted };
        })
      );
    } catch (err) {
      console.error("체크박스 에러", err);
    }
  }, []);

  const onClickHandlerDelete = useCallback(async id => {
    try {
      await deleteTodo(id);
      setTodos(prev => prev.filter(el => el.id !== id));
    } catch (err) {
      console.error("투두 삭제 에러", err);
    }
  }, []);

  const onClicktHandlerModify = useCallback(async (id, todo, isCompleted) => {
    try {
      if (todo.trim() === "") return;
      const { data } = await putTodo(id, todo, isCompleted);
      setTodos(prev =>
        prev.map(el => {
          if (el.id !== data.id) return el;
          return { ...el, todo };
        })
      );
    } catch (err) {
      console.error("투두 수정 에러", err);
    }
  }, []);

  useEffect(() => {
    if (isLogin()) {
      (async () => {
        try {
          const { data } = await getTodos();
          setTodos(data);
        } catch (err) {
          console.error("todolist load error", err);
        }
      })();
    } else {
      alert("로그인이 필요합니다");
      navigation(ROUTE_PATH.SIGNIN);
    }
  }, []);

  return (
    <Page>
      <Title>To Do List</Title>
      <Main>
        <input
          data-testid="new-todo-input"
          value={todo}
          onChange={onChangeHandlerTodo}
        />
        <button
          data-testid="new-todo-add-button"
          onClick={onClickHandlerAddTodo}
        >
          추가
        </button>
        <ul>
          {todos?.map(el => (
            <Todo
              key={el.id}
              props={el}
              onChangeHandlerCheckbox={onChangeHandlerCheckbox}
              onClickHandlerDelete={onClickHandlerDelete}
              onClicktHandlerModify={onClicktHandlerModify}
            />
          ))}
        </ul>
      </Main>
    </Page>
  );
};

export default Todolist;
