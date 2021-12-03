import React from "react";
import CountUp from "react-countup";

function Hero({ holidayMessages }) {
  return (
    <div className="row ppc-hero">
      <div className="col-12 d-flex flex-column ppc-background justify-content-center align-items-center">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3">
              <a href="https://ppc.lol/dotnet" target="_blank" rel="noreferrer">
                <img
                  className="img-fluid ppc-logo"
                  src="assets/img/peercoin.svg"
                  alt="peercoin logo"
                />
              </a>
            </div>
          </div>
          <div className="row justify-content-center mt-3 mt-md-5 mb-3 mb-md-5 pb-3">
            <span>
              <img
                className="ppc-santa"
                src="assets/img/santa.png"
                alt="santa"
              />
            </span>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <h4 className="m0">
                <strong>Holiday wishes</strong>
              </h4>
            </div>
          </div>
          <div className="row pt-3 pb-3 justify-content-center">
            <div className="col-auto">
              <h2 className="m0">
                <CountUp end={holidayMessages.length} />
              </h2>
            </div>
          </div>
          <div className="ppc-arrow_down d-none d-lg-block d-xl-block">
            <a href="#timeline">
              <img src="assets/img/arrowDown.png" alt="arrow down" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
