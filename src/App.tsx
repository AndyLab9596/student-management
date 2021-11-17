import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login">{/* Login page */}</Route>
        <Route path="/admin">{/* Admin layout */}</Route>
        <Route>{/* Not Found */}</Route>
      </Switch>
    </div>
  );
}

export default App;
