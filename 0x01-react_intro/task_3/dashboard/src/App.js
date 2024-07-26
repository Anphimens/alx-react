import logo from "./holberton.jpg";
import "./App.css";
import { getFooterCopy, getFullYear } from "./utils";

function App() {
  const isIndex = true;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="holberton.jpg" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="button">OK</button>
        </form>
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
