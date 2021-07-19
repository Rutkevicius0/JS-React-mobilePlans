import React, { Component } from 'react';

class HaveServices extends Component {
  state = {};
  render() {
    return (
      <div className="haveservices-container">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <p className="haveservices-text">
          Turite „Telia“ namų paslaugų? Gausite dar daugiau GB su Telia1.
        </p>
      </div>
    );
  }
}

export default HaveServices;
