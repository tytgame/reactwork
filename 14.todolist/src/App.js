import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useState, useRef, useEffect } from 'react';
// import Todoitem from './components/Todoitem';
/*
const tmpData = [
  {
    id : 0,
    isDone : false,
    content : 'React 공부하기',
    date : new Date().getTime()
  },
  {
    id : 1,
    isDone : false,
    content : '꿀맛같은 휴식',
    date : new Date().getTime()
  },
  {
    id : 2,
    isDone : false,
    content : '친구와 게임하기',
    date : new Date().getTime()
  },
]
*/
function App() {
  
  const getInitialTodos = () => {
    const data = localStorage.getItem("todos");
    if (!data) return [];
    return JSON.parse(data);
  };
  
  const [todos, setTodos] = useState(getInitialTodos);
  const [viewType, setViewType] = useState("all");
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  /*
  * useRef()
    : 변경되는 값 저장
      DOM요소에 직접 접근가능
      재랜더링 되지 않음
  */ 
  // 새로운 todolist 추가시 id의 번호 부여 변수
  const idRef = useRef(3);

  // 새로운 todolist 추가하는 함수
  const onCreate = (content) => {
    const newItem = {
      id : idRef.current++,
      isDone : false,
      content : content,
      date : new Date().getTime(),
    };
    setTodos([newItem, ...todos]);
  };

  const onDelete = (id) => {
      // const result = todos.filter((todo)=>todo.id !== id);
      // setTodos(result);

      setTodos(todos.filter((todo) => todo.id !== id));
  }
  // 체크박스 클릭시 isDone 값을 true <-> false 로 상태 변경하기
  
  const onToggle = (id) => {
      setTodos(
        todos.map((todo) => 
          todo.id === id 
        ? {...todo, isDone: !todo.isDone}
        : todo
      )
    );
  }


  const getFilteredTodos = () => {
    if(viewType === 'done') return todos.filter(todo => todo.isDone);
    if(viewType === 'notYet') return todos.filter(todo => !todo.isDone);
    return todos; 
  }


  // 삭제시 isDone의 체크박스를 true로 바꾸기
  /*
  const onUpdate = (targetId) => {
    setTodos (todos.map((todo) => {
      if(todo.id === targetId) {
        return {
          ...todo,
          isDone : !todo.isDone
        }
      }
      return todo;
    })
  )}
  */

  return (
    <div className={`App ${isDark ? 'dark' : ''}`}>
      <button onClick={() => {
        setIsDark(!isDark)
      }}>{isDark ? "라이트모드" : "다크모드"}</button>
      <Header/>
      <Editor onCreate={onCreate}/>
      <div className='filter-buttons'>
        <button onClick={() => setViewType("all")}>전체</button>
        <button onClick={() => setViewType("done")}>완료</button>
        <button onClick={() => setViewType("notYet")}>미완료</button>
      </div>
      <List todos={getFilteredTodos()} onDelete={onDelete} onToggle={onToggle}/>
    </div>
  );
}

export default App;