import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import Home from './home';
import Engineer from './engineer';
import Communicator from './communicator';
import Athlete from './athlete';

const App = () => (
  <Router>
  <div>
  <Header />
  <Route exact path="/" component={Home} />
  <Route path="/engineer" component={Engineer} />
  <Route path="/communicator" component={Communicator} />
  <Route path="/athlete" component={Athlete} />
  <Footer />
  </div>
  </Router>
);

export default App;
