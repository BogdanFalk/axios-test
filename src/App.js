import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios
      .get(`https://strapi-todo-app.herokuapp.com/actions`)
      .then((res) => console.log(res));

    axios
      .post(`https://strapi-todo-app.herokuapp.com/people`, {
        email: "masdffsadfk@yologre.com",
        password: "12356546",
      })
      .then((res) => console.log(res));
  }, []);

  return (
    <div className="App">
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
