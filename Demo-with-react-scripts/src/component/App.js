import React,{ Component } from 'react';
import Header from './Header';
import Routes from './../Routes';
import './component';
import Abc from './Abc';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Routes/>
        <Abc/>
      </div>

    );
  }

}

export default App;