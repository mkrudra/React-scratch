import React,{ Component } from 'react';
import Header from './Header';
import Routes from './../Routes';
import './component';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Routes/>
      </div>

    );
  }

}

export default App;