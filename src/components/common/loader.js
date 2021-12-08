import React from "react";

const Loader = () => {
  return (
    <div className="row mt-4" key="loader">
      <div className="col-6 text-center" key={0}>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
