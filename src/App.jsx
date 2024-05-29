import { useState } from "react";
import styled from "styled-components";

//0. 스타일 컴포넌트
const BtnStyled = styled.button`
  width: 100px;
  height: 30px;
  background-color: #222222;
  color: #eee;
  border-radius: 8px;
`;

const BtnStyled2 = styled.button`
  width: 50px;
  height: 30px;
  background-color: #eee;
  color: #222;
  border-radius: 8px;
  border: none;
`;

//1.useState 선언
function App() {
	const [count, setCount] = useState(0);
	
//2.카운트 함수 만들기
const addCount = () => {
  setCount(count + 1);
};

const minusCount = () => {
  setCount(count - 1);
};

const resetCount = () => {
  setCount(0)
};

//3. 카운트 함수적용
  return (
    <div>
      <div style={{
        width: "300px", 
        margin: "40px auto",
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center"
        }} >{count}</div>
      <div style={{
        width: "300px", 
        height:"50px",
        margin: "0 auto"
        }}>
      <BtnStyled onClick={addCount}>1더하기</BtnStyled>
      <BtnStyled style={{marginLeft: "4px"}} onClick={minusCount}>1빼기</BtnStyled>
      <BtnStyled2 style={{marginLeft: "4px"}} onClick={resetCount}>리셋</BtnStyled2>
      </div>
    </div>
  );
};

export default App;