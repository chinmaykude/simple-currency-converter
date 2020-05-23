import React from "react";

import SelectElement from "./util/SelectElement";

const CurrencyToConvertFrom = props => {
  const { from_currency, onChange, currencyData } = props;
  return (
    <>
      <div className="form-group col-md-3 col-sm-12 col-xs-12 font-input-heads p-3 text-primary">
        <label>From</label>
        <SelectElement
          name="from_currency"
          value={from_currency}
          onChange={onChange}
          id="fromCurrency"
          className="form-control"
          currencyData={currencyData}
        />
      </div>
    </>
  );
};

export default CurrencyToConvertFrom;
