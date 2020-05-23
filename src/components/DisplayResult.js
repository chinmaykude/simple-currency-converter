import React from "react";
import "../App.css";

const DisplayResult = props => {
  const {
    amount,
    from_currency,
    conversion_display_result,
    to_currency,
    displayResult,
    isLoading
  } = props;

  return (
    <>
      {displayResult ? (
        <div className="text-center display-2 display text-info col-12 display-output ">
          <p id="from-currency-display-font" className="text-wrap">
            {`${amount} `} <small>{from_currency} = </small>
          </p>
          <p className="text-wrap">
            {`${conversion_display_result}`} <small>{to_currency}</small>
          </p>
        </div>
      ) : isLoading ? (
        <div
          class="d-flex justify-content-center text-primary"
          style={{ fontSize: "20px", padding: "10px" }}
        >
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-center display-3 display text-info col-12 display-out"></p>
        </div>
      )}
    </>
  );
};

export default DisplayResult;
