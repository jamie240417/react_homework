import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  // CSS
  const layoutMiddle = {
    maxWidth: "1200px",
    minWidth: "800px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eeeeee",
    padding: "20px"
  }
  const layoutReft = {
    maxWidth: "1200px",
    minWidth: "800px",
    gap: "20px"
  }

  const squareStyle = {
    width: "380px",
    border: "3px solid green",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px"
  };

  // Initial state
  const initialState = [
    {
      title: "완료 타이틀 예시",
      text: "완료된 일이 들어갑니다. isDone: false",
      isDone: false,
      id: uuidv4(),
    },
    {
      title: "할일 타이틀 예시",
      text: "해야할 일이 들어갑니다. isDone: true",
      isDone: true,
      id: uuidv4(),
    },
  ];

  // State
  const [todos, setTodos] = useState(initialState);

  // Todo list 컴포넌트
  function Todolist({ isActive }) {
    return (
      <div>
        <h3>{isActive ? "해야할 것" : "완료된 것"}</h3>
        {todos
          .filter((item) => item.isDone === isActive)
          .map((item) => (
            <div key={item.id} style={squareStyle}>
              <h5>{item.title}</h5>
              <p>{item.text}</p>
              <button onClick={() => handleDoneClick(item.id)}>완료</button>
              <button onClick={() => handleDeleteClick(item.id)}>삭제</button>
            </div>
          ))}
      </div>
    );
  }
  

  // 완료/삭제버튼
  const handleDoneClick = (id) => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone
        };
      }
      return todo;
    }));
  };
  

  const handleDeleteClick = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };


  // Input box 컴포넌트
 function InputBox({setTodos}) {
const [title, setTitle] = useState('')
const [text, setText] = useState('')

//새로운 투두리스트 생성
const handleSubmitClick = (e) => {
    e.preventDefault();

    const newTodo =  {
      title: title,
      text: text,
      isDone: true,
      id: uuidv4(),
};
setTodos((prev) => [...prev,newTodo])
setTitle('');
setText('');
};

//타이틀/텍스트 값 변경
const handleTitleChange=(e)=>{
  setTitle(e.target.value)
}
const handleTextChange=(e)=>{
  setText(e.target.value)
}


  return (
    <form style={layoutMiddle} onSubmit={handleSubmitClick}>
    <input value= {title} onChange={handleTitleChange}></input>
    <input value= {text} onChange={handleTextChange}></input>
    <button type="submit">추가</button>
    </form>
  );
  }

  //HTML
  return (
    <div>
      <InputBox setTodos={setTodos}/>

      <section style={layoutReft}>
        <div>
          <Todolist isActive={true} setTodos={setTodos}></Todolist>
        </div>
        <div>
          <Todolist isActive={false} setTodos={setTodos}></Todolist>
        </div>
      </section>
    </div>
  );
};

export default App;
