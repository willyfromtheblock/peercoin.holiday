import React from "react";

function LogoAndSanta() {
    return <React.Fragment>
        <div className="row justify-content-center">
            <div className="col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3 mt-4">
                <a href="https://ppc.lol/dotnet" target="_blank" rel="noreferrer">
                    <img
                        className="img-fluid ppc-logo"
                        src="/assets/img/logo_peer.svg"
                        alt="peercoin logo"
                    />
                </a>
            </div>
        </div>
        <div className="row justify-content-center mt-5 mb-3 mb-md-5 pb-3">
            <span>
                <img
                    className="ppc-santa"
                    src="/assets/img/santa.svg"
                    width="90px"
                    alt="santa"
                />
            </span>
        </div>
    </React.Fragment>
}

export default LogoAndSanta;