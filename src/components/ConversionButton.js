import React from "react";

const ConversionButton = props => {
  const { handleClick } = props;
  return (
    <>
      <div className=" col-md-2 col-sm-12 col-xs-12 align-middle">
        <button
          className="btn btn-primary col-xs-12 col-sm-12 col-md-3 mx-3 p-md-2.4 btn-lg my-5 mx-1 text-center"
          id="conv-btn"
          onClick={() => handleClick()}
        >
          >
        </button>
      </div>
    </>
  );
};

export default ConversionButton;
