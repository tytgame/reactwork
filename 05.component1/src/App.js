import logo from './logo.svg';
import './App.css';

const user = {
  firstName : 'Hong',
  lastName : 'GilDong'
};

function Student(u) {
  return u.firstName + ' ' + u.lastName;
}

function App() {
  const isStudent = true;
  return (
    <div className="App">
      <h1>start React 2025 Tjoeun</h1>
      <h3>Component 실습</h3>

      {isStudent == true ? <h4>{Student(user)}님 환영합니다</h4> : <h4>학원생이 아닙니다</h4>}
    </div>
  );
}

export default App;
