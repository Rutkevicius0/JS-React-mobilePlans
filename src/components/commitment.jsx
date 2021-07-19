import React, { Component } from 'react';

class Commitment extends Component {
  state = {};
  render() {
    return (
      <div className="commitment-container">
        <form className="commitment-form">
          <div className="commitment-choice">
            <input
              className="radio-check"
              type="radio"
              name="contract"
              id="contract"
              value="contract"
              defaultChecked
            />
            <label for="contract">24 men. sutartis</label>
          </div>
          <div className="commitment-choice">
            <input
              className="radio-check"
              type="radio"
              name="contract"
              id="nocontract"
              value="nocontract"
            />
            <label for="nocontract">Be isipareigojimu</label>
          </div>
        </form>
      </div>
    );
  }
}

export default Commitment;
