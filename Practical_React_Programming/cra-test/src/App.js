import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import './test.css'

function App() {
  console.log(`NODE_ENV = ${process.env.REACT_APP_DATA_API}`)
  console.log(`NODE_ENV = ${process.env.REACT_APP_LOGIN_API}`)
  return (
    <div className="App">
      <TodoList />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
