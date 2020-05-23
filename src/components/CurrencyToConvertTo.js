import React from "react";

import SelectElement from "./util/SelectElement";

const CurrencyToConvertTo = props => {
  const { to_currency, onChange, currencyData } = props;
  return (
    <>
      <div className="form-group col-md-3 col-sm-12 col-xs-12 font-input-heads p-3 text-primary">
        <label>To</label>
        <SelectElement
          name="to_currency"
          value={to_currency}
          onChange={onChange}
          id="toCurrency"
          className="form-control"
          currencyData={currencyData}
        />
      </div>
    </>
  );
};

export default CurrencyToConvertTo;
