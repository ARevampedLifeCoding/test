import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";


import Adopt from "./components/Adopt/Adopt";
import Auth from "./components/Auth/Auth";
import Nav from "./components/Nav/Nav";

const App = () => {
  <Provider>
    <Router>
      <Container maxWidth="lg">
        < Nav />
        <Routes>
          <Route path="/" exact component={Adopt} />
          <Route path="/auth" exact component={Auth} />
        </Routes>
      </Container>
    </Router>
   </Provider>
};

export default App;
