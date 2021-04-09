import logo from './logo.svg';
import React, {useState} from "react"; //내장함수
import './App.css';

function App() {
    let title = "사이트제목";
    let post = "글제목";
    let liClass={
        color:'#e0e0e0',
        fontSize: '1.5rem',
        width: '25%'
    }

    let [postTitle, postChange] = useState(['남자 코트 추천', '여자 코트 추천']); //[a, b] a=설정값, b = 변경값, 글 변경시 새로고침 없이 변경됨
    let [c, d] = [10, 100];
    let [plus, plusCh] = useState(0);
    function test(){
        return 50
    }
    // addEventListener('click', test)
    function btnClick(e){
        alert (e);
    }
  return (
    <div className="App">
        <div className="title">
            {title}
        </div>
        <ul style={liClass}>
            <li>{postTitle} <span onClick={()=>{plusCh(plus+1)}}>버튼</span>{plus}</li>
            <li>{test()} <span onClick={()=>{plusCh(plus+1)}}>버튼</span>{plus}</li>
            <li><img src={logo} /> <span onClick={()=>{plusCh(plus+1)}}>버튼</span>{plus}</li>
        </ul>
    </div>
  );
}

export default App;
