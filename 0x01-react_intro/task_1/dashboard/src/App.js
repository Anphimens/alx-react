import logo from "./holberton.jpg";
import "./App.css";
import { getFooterCopy, getFullYear } from "./utils";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="holberton.jpg" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <p>
          {getFooterCopy(isIndex)} {getFullYear()}
        </p>
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
