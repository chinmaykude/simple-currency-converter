import React from "react";
import logo from "../assets/conversionLogo.jpg";

const ConversionLogo = props => {
  const { handleFlip } = props;
  return (
    <>
      <div className="form-group col-md-1 col-sm-12 col-xs-12 align-middle text-center">
        <img
          src={logo}
          className="col-md-12 box-conversion-img my-md-5 p-1 text-center"
          alt="Conversion Logo"
          onClick={() => handleFlip()}
        />
      </div>
    </>
  );
};

export default ConversionLogo;
