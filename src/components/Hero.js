import React from "react";
import CountUp from "react-countup";

function Hero({ holidayMessages }) {
  return (
    <div className="row ppc-hero">
      <div className="col-12 d-flex flex-column ppc-background justify-content-center align-items-center">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3 mt-3">
              <a href="https://ppc.lol/dotnet" target="_blank" rel="noreferrer">
                <img
                  className="img-fluid ppc-logo"
                  src="assets/img/peercoin.svg"
                  alt="peercoin logo"
                />
              </a>
            </div>
          </div>
          <div className="row justify-content-center mt-5 mb-3 mb-md-5 pb-3">
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
              <h1> This year, we have something special for you.</h1>
            </div>
          </div>
          <div className="row justify-content-center mt-sm-3 mt-md-5">
            <div className="col-auto">
              <p className="ppc-paragraph">
                Send this years holiday wishes with the new Metadata feature of
                our mobile app. <br />
                <br />
                Simply send <strong>0.01 PPC</strong> and your message to
                <br />
                <strong> P9kBPRzriDA6rLRrzXgsR9qtnygELu7dLF</strong>
                <br />
              </p>
            </div>
          </div>
          <div className="row justify-content-center align-items-center mt-md-3">
            <div className="col-6-auto">
              <a
                href="https://play.google.com/store/apps/details?id=com.coinerella.peercoin"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png"
                  alt="Get it on Google Play"
                  height="80"
                />
              </a>
            </div>
            <div className="col-6-auto">
              <a
                href="https://apps.apple.com/us/app/peercoin-wallet/id1571755170?itsct=apps_box_badge&amp;itscg=30200"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1626912000&h=8e86ea0b88a4e8559b76592c43b3fe60"
                  alt="Download on the App Store"
                  height="55"
                />
              </a>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-auto">
              <h4 className="m0">
                <strong>Holiday wishes received</strong>
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
