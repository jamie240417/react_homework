import { useState } from "react";
import styled from "styled-components";

//0. 스타일 컴포넌트
//const BtnStyled = styled.button`
//  width: 100px;
//  height: 30px;
//  background-color: #222222;
//  color: #eee;
//  border-radius: 8px;
//`;

//1.useState
function App() {
	const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "잠자기",
      completed: true,
    },
    {
      id:2,
      test: "일찍일어나기",
      completed: false,
    },
  ]);
	
//2.state 변경 함수
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

//제출하기
const handleAddTodo = (event) => {
  event.preventDefault();
  if(!input.trim()) return;
  const newTodo = {
    id: Date.now(),
    text: input,
    completed: false,
  };
  setTodos([...todos, newTodo]);
  setInput("");
};

//삭제하기 버튼 함수
const handleDeleteTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};

//수정하기 함수
const handleToggleTodo = (id) => {
  setTodos(
    todos.map((todo)=>
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    )
  );
};

  return (
    <div>
      <h1>할 일 목록</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" placeholder="할 일을 추가하세요" 
        value={input}
        onChange={handleInputChange}
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos.map((todo) =>(
          <li
          key={todo.id}
          style={{textDecoration: todo.completed ? "line-through":"none"}}
          >
            {todo.text}
            <button onClick={() => handleToggleTodo(todo.id)}>
              {todo.completed ? "취소": "완료"}
              </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;