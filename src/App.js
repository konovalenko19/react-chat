import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {
  ErrorBoundary,
} from "./components";

import PageMenu from "./components/PageMenu";
import ChatsModule from "./modules/ChatsModule";
import LoginModule from "./modules/LoginModule";
import SignupModule from "./modules/SignupModule";

import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Router>

          <PageMenu/>

          <Switch>
            <Route path="/login">
              <LoginModule />
            </Route>

            <Route path="/signup">
              <SignupModule />
            </Route>

            <Route path="/chats">
              <ChatsModule />
            </Route>
          </Switch>
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;
