import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import MainPage from "./views/index";

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
          <div>
            {/* <Header /> */}

            <Switch>
              <Route path={"/"} component={MainPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
