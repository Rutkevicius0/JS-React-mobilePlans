import React, { Component } from 'react';
import './App.css';
import Commitment from './components/commitment';
import HaveServices from './components/haveServices';
import MobilePlan from './components/mobilePlan';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Mobiliojo ryšio planai</h1>
          <p>
            Visos Lietuvoje turimo plano naudos galioja Baltijos ir
            Skandinavijos šalyse.
          </p>
          <Commitment />
          <HaveServices />
          <MobilePlan />
        </header>
      </div>
    );
  }
}

export default App;
