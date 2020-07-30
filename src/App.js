import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Page components
import Header from './Header';
import AppNavigation from './AppNavigation';
import {Container} from 'react-bootstrap';

//Sub pages:
import Home from './Home';
import About from './About';
import GetCategoryId from './Category';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Container className="App">

      <Header />
      <AppNavigation />

      <div>
        <Router>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/categories/:id">
              <GetCategoryId />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </Container>
  );
}

export default App;
