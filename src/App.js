import React from "react";
import Navbar from "./components/Navbar";
import AccountProfile from "./components/AccountProfile";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/account/profile"
          render={() => <AccountProfile />}
        />
      </Switch>
    </Container>
  </>
);

export default App;
