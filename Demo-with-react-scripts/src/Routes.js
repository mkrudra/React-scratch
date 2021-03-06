import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Solutions from './component/Solutions';

class Routes extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/contact" component={Contact} />
      </Switch>
    );
  }

}

export default Routes;