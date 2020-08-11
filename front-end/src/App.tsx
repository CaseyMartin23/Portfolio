import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Profile from "./profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Profile />
      </Router>
    </div>
  );
}

export default App;
