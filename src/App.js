import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./routes/Home";
import Movies from "./routes/Movies";
import "./App.css";

const isNotFound = () => {
  return (
    <div className="notfound">
      <h2>Not found...</h2>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <div className="nav">
        <NavLink to="/" exact={true}>
          Home
        </NavLink>
        <NavLink to="/movies">Start</NavLink>
      </div>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/movies" component={Movies} />
        <Route component={isNotFound} />
      </Switch>
    </div>
  );
};

export default App;
