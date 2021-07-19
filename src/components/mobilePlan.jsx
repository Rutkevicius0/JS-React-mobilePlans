import React, { Component } from 'react';

class MobilePlan extends Component {
  state = {};
  render() {
    return this.props.plansData.map((p) => {
      return (
        <div key={p.headerTitle} className="plan-card">
          <div className="card-top">
            <p className="plan-name">{p.headerTitle}</p>
            <div className="plan-data">
              <h5 className="data-noservices">{p.dataAlowed} GB</h5>
              <h5 className="data-withservices">2 GB</h5>
            </div>
            <small>
              Iš jų {p.dataEU} GB <span className="roaming-info">ES/EEE</span>{' '}
            </small>
            <p>{p.minSms}</p>
          </div>
          <div className="card-middle">
            <button className="card-link">
              <i className="fa fa-check card-link-icon" aria-hidden="true"></i>{' '}
              M. parašas (6 mėn.)
            </button>
            <button className="card-link">
              <i className="fa fa-check card-link-icon" aria-hidden="true"></i>
              Įrangos draudimas (3 mėn.)
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
    });
  }
}

export default MobilePlan;
