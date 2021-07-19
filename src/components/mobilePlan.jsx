import React, { Component } from 'react';

class MobilePlan extends Component {
  state = {};
  render() {
    return (
      <div className="plan-card">
        <div className="card-top">
          <p className="plan-name">Mobilus START 1</p>
          <div className="plan-data">
            <h5 className="data-noservices">1 GB</h5>
            <h5 className="data-withservices">2 GB</h5>
          </div>
          <small>Iš jų 1 GB ES/EEE</small>
          <p>Neribotos MIN ir SMS</p>
        </div>
        <div className="card-middle">
          <button className="card-link">
            <i class="fa fa-check card-link-icon" aria-hidden="true"></i> M.
            parašas (6 mėn.)
          </button>
          <button className="card-link">
            <i class="fa fa-check card-link-icon" aria-hidden="true"></i>Įrangos
            draudimas (3 mėn.)
          </button>
        </div>
        <div className="card-bottom">
          <div className="sub-prices">
            <h3 className="sub-price">
              9,00 <span className="thin-text">€/mėn.</span>{' '}
            </h3>
            <small className="sub-term">24 mėn. sutartis</small>
          </div>
          <div className="subscribe">
            <button className="subscribe-btn">Gauti pasiūlymą</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MobilePlan;
