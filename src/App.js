import React, { Component } from "react";
import Master from "./components/Master/Master";
import { Route, Switch, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">Inicio</Link>
        <br />
        <Link to="/crear/vinculado">Vinculado</Link>

        <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
          {/* <Route path="/crear/vinculado" component={Master} /> */}
          <Route
            path="/crear/vinculado"
            render={(routeProps) => {
              return <Master {...routeProps} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
