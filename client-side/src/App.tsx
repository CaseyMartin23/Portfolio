import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [testData, setTestData] = useState();

  const testFunc = () => {
    try {
      fetch("/test")
        .then((res) => {
          res.json();
          console.log(res);
        })
        .then((data) => {
          console.log(data);
          // setTestData(data)
        });
    } catch (err) {
      console.log("Some went wrong\n", err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={testFunc}>refresh!</button>
        {testData && <div>{testData}</div>}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
