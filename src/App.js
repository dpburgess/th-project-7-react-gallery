import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Results from "./Components/Results";
import axios from "axios";
import apiKey from "./config";

function App() {
  const api = apiKey;
  return (
    <BrowserRouter>
      <div className="container">
        <Navigation />
        <Switch>
          <Redirect to="/trees" />
          <Route exact path="/" render={() => <Redirect to="/trees" />} />
          <Route
            exact
            path="/"
            render={() => <Results title="blah" images="eee" />}
          />

          {/*<Route path="/about" render={() => <About title="About" />} /> */}
          {/*inline rendering is used to pass props to components in a route */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
