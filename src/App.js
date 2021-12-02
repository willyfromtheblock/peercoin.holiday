import "./scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import CountUp from "react-countup";
import TimeLine from "./components/TimeLine";
import Footer from "./components/Footer";
import orbituaries from "./data/death_certificates.json";

function App() {
  return (
    <div className="container-fluid overflow-hidden">
      <div className="row ppc-hero">
        <div className="col-12 d-flex flex-column ppc-background justify-content-center align-items-center">
          <div className="container-fluid">
            <div className="row justify-content-center ">
              <div className="col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3">
                <a
                  href="https://ppc.lol/dotnet"
                  target="_blank"
                  rel="noreferrer"
                >
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
                  className="ppc-tombstone"
                  src="assets/img/tombstone.png"
                  alt="tombstone"
                />
              </span>
            </div>
            <div className="row justify-content-center">
              <div className="col-auto">
                <h4 className="m0">
                  <span className="mr-2">
                    <img src="assets/img/reaper.png" width="40px" alt="reaper icon" />
                  </span>
                  <strong>Declared dead</strong>
                </h4>
              </div>
            </div>
            <div className="row pt-3 pb-3 justify-content-center">
              <div className="col-auto">
                <h2 className="m0">
                  <CountUp end={orbituaries.length} /> times
                </h2>
              </div>
            </div>
            <div className="row mt-5 justify-content-center">
              <div className="col-auto">
                <h4 className="m0">
                  <span className="mr-2">
                    <img src="assets/img/frankenstein.png" width="40px" alt="zombie icon" />
                  </span>
                  <strong>Undead since</strong>
                </h4>
              </div>
            </div>
            <div className="row pt-3 justify-content-center">
              <div className="col-auto">
                <h2 className="m0">7th of July 2012</h2>
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
      <div className="row">
        <div className="col d-flex justify-content-center" id="timeline">
          <TimeLine orbituaries={orbituaries} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
