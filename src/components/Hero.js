import React from "react";
import CountUp from "react-countup";

function Hero({ holidayMessagesLength }) {
  return (
    <div className="row ppc-hero">
      <div className="col-12 d-flex flex-column ppc-background justify-content-center align-items-center">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3 mt-4">
              <a href="https://ppc.lol/dotnet" target="_blank" rel="noreferrer">
                <img
                  className="img-fluid ppc-logo"
                  src="assets/img/logo_peer.svg"
                  alt="peercoin logo"
                />
              </a>
            </div>
          </div>
          <div className="row justify-content-center mt-5 mb-3 mb-md-5 pb-3">
            <span>
              <img
                className="ppc-santa"
                src="assets/img/santa.svg"
                width="90px"
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
                Simply send <strong>0 PPC</strong> and your message to
              </p>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <a
                    href="https://blockbook.peercoin.net/address/P9kBPRzriDA6rLRrzXgsR9qtnygELu7dLF"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <strong> PRS1nBeyB9FVGaFhpL7BG5ruuaNNrehBVA</strong>
                  </a>
                </div>
                <div>
                  <span
                    onClick={() =>
                      navigator.clipboard.writeText(
                        "PRS1nBeyB9FVGaFhpL7BG5ruuaNNrehBVA"
                      )
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src="/assets/img/copy_icon.svg"
                      height="18px"
                      alt="copy to clipboard"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-auto">
              <div className="m0 ppc-wishes">
                <strong>Holiday wishes received</strong>
              </div>
            </div>
          </div>
          <div className="row pt-3 pb-3 justify-content-center">
            <div className="col-auto">
              <div className="m0 ppc-wishes">
                <CountUp end={holidayMessagesLength} />
              </div>
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
          <div className="ppc-arrow_down d-none d-lg-block d-xl-block">
            <a href="#timeline">
              <img src="assets/img/arrow_down.svg" alt="arrow down" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
