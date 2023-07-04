import { useReducer, useState, useRef } from "react";
import reducer from "./store/reducer";
import {
  initState,
  addTodo,
  deleteTodo,
  editTodo,
  inputChange,
  changeEdit
} from "./store/actions";
import logger from "./store/logger";
import './Container.css'

function Container() {
  const [todosList, dispatch] = useReducer(logger(reducer), initState);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState();
  const inputRef = useRef();

  const {todo, todos} = todosList

  //handle add todo
  const handleAddTodo = () => {
    if (todo.trim() != '' && todos.includes(todo) === false) {
      dispatch(addTodo(todosList.todo));
      todosList.todo = "";
      inputRef.current.focus();
    } else {
      alert("Not allow enter space and repeat task. Let try again!")
    }
  };

  //handle delete todo
  const handleDeleteTodo = (index) => {
    dispatch(deleteTodo(index));
  };

  //handle edit todo
  const handleEditTodo = (index) => {
    dispatch(editTodo(todosList.todos[index]));
    setEdit(true);
    setId(index);
    inputRef.current.focus();
  };

  //handle edit acception
  const handleChangeEdit = () => {
    dispatch(
      changeEdit({
        id,
        todo: todosList.todo
      })
    );
    setEdit(false);
  };

  return (
    <div style={{ margin: "20px" }}>
    <h3>To do list</h3>
      <input
        ref={inputRef}
        type="text"
        value={todosList.todo}
        onChange={(e) => dispatch(inputChange(e.target.value))}
        onKeyUp={(e) =>
          (e.keyCode === 13 && !edit && handleAddTodo()) ||
          (e.keyCode === 13 && edit && handleChangeEdit())
        }
      />
      {edit ? (
        <button onClick={handleChangeEdit}>Change</button>
      ) : (
        <button onClick={handleAddTodo}>Add</button>
      )}
      <ul className="container">
        {todosList.todos.map((todo, index) => (
          <div className="todo_list">
          <li className="todo_item" key={index}>
            {todo}
            <div className="btn">
            <button
              style={{ marginLeft: "20px" }}
              onClick={() => handleEditTodo(index)}
            >
              Sửa
            </button>
            <button onClick={() => handleDeleteTodo(index)}>Xóa</button>
            </div>
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Container;
