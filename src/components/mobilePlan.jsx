import React, { Component } from 'react';

class MobilePlan extends Component {
  formatPrice(num) {}
  render() {
    return this.props.plansData.map((p) => {
      return (
        <div key={p.headerTitle} className="plan-card">
          <div className="card-top">
            <p className="plan-name">{p.headerTitle}</p>
            {this.props.haveServices && p.dataAlowed !== 'Neriboti' ? (
              <div className="plan-data">
                <h5 className="data-noservices">{p.dataAlowed} GB</h5>
                <h5 className="data-withservices">{p.dataServices} GB</h5>
              </div>
            ) : (
              <div className="plan-data">
                <h5 className="data-noservices-only">{p.dataAlowed} GB</h5>
              </div>
            )}
            <small>
              Iš jų {p.dataEU} GB <span className="roaming-info">ES/EEE</span>{' '}
              {p.worldwide && `+ ${p.worldwide} MB kitose šalyse`}
            </small>
            <p className="minsms">{p.minSms}</p>
          </div>
          <div className="card-middle">
            {p.features.map((f) => {
              return (
                <button key={f.title} className="card-link">
                  <i
                    className="fa fa-check card-link-icon"
                    aria-hidden="true"
                  ></i>{' '}
                  {f.title}
                </button>
              );
            })}
          </div>
          <div className="card-bottom">
            <div className="sub-prices">
              <h3 className="sub-price">
                {this.props.commitment
                  ? p.price.commitment.toFixed(2)
                  : p.price.noComitment.toFixed(2)}{' '}
                <span className="thin-text">€/mėn.</span>{' '}
              </h3>
              <small className="sub-term">
                {this.props.commitment
                  ? p.contractLength.commitment
                  : p.contractLength.noCommitment}
              </small>
            </div>
            <div className="subscribe">
              <button className="subscribe-btn">{p.ctaButton}</button>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default MobilePlan;
