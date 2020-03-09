import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import MainPage from "./views/index";
import ScrollSnapView from "./global/ScrollSnapView"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Erik Irgens</title>
        </Helmet>
        <BrowserRouter>
          {/* <Header /> */}

          <Switch>
            <Route path={"/"} component={MainPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
