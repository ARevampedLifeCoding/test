// import "./App.scss";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {  useState } from 'react';
import { Provider } from "react-redux";

// import Navbar from "./components/Navbar/Navbar";
// import Menu from './components/Menu/Menu'
import Adopt from "./components/Adopt/Adopt";
// import Login from './components/Auth/Auth'
import Auth from "./components/Auth/Auth";
import Nav from "./components/Nav/Nav"

const App = () => {
  <Provider>
    <Router>
      <Container maxWidth="lg">
        {/* <Navbar /> */}
        < Nav />
        <Routes>
          <Route path="/" exact component={Adopt} />
          <Route path="/auth" exact component={Auth} />
        </Routes>
      </Container>
    </Router>
  </Provider>;
};

export default App;
