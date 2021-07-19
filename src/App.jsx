import React, { Component } from 'react';
import './App.css';
import Commitment from './components/commitment';
import HaveServices from './components/haveServices';
import MobilePlan from './components/mobilePlan';

import '../node_modules/fontawesome-4.7/css/font-awesome.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {};
  render() {
    return (
      <div className="App">
        <div className="main-container">
          <h1>Mobiliojo ryšio planai</h1>
          <p>
            Visos Lietuvoje turimo plano naudos galioja Baltijos ir
            Skandinavijos šalyse.
          </p>
          <div className="controls">
            <Commitment />
            <HaveServices />
          </div>
          <main className="plan-cards">
            <MobilePlan />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
