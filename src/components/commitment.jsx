import React, { Component } from 'react';

class Commitment extends Component {
  render() {
    return (
      <div className="commitment-container control-group">
        <div
          onChange={(props) => this.props.handleRadio()}
          className="commitment-choice"
        >
          <label className="control control-radio">
            24 men. sutartis
            <input type="radio" name="radio" defaultChecked />
            <div className="control_indicator"></div>
          </label>
        </div>
        <div
          onChange={(props) => this.props.handleRadio()}
          className="commitment-choice"
        >
          <label className="control control-radio">
            Be isipareigojimu
            <input type="radio" name="radio" />
            <div className="control_indicator"></div>
          </label>
        </div>

        {/* <div
          onChange={(props) => this.props.handleRadio()}
          className="commitment-choice"
        >
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
        <div
          onChange={(props) => this.props.handleRadio()}
          className="commitment-choice"
        >
          <input
            className="radio-check"
            type="radio"
            name="contract"
            id="nocontract"
            value="nocontract"
          />
          <label for="nocontract">Be isipareigojimu</label>
        </div> */}
      </div>
    );
  }
}

export default Commitment;
