import React, { Component } from 'react';
import './App.css';
import Commitment from './components/commitment';
import HaveServices from './components/haveServices';
import MobilePlan from './components/mobilePlan';

import '../node_modules/fontawesome-4.7/css/font-awesome.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commitment: true,
      plans: [],
    };
  }
  async componentDidMount() {
    const res = await fetch('/data/plan1.json');
    const data = await res.json();
    this.setState({ plans: data });
    console.log(this.state.plans);
  }
  handleRadio = () => {
    console.log('select was pressed');
    this.setState({ commitment: !this.state.commitment });
  };
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
            <Commitment
              handleRadio={this.handleRadio}
              commitment={this.state.commitment}
            />
            <HaveServices />
          </div>
          <main className="plan-cards">
            <MobilePlan plansData={this.state.plans} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
