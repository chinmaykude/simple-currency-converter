import React from "react";

const InputAmount = props => {
  const { amount, handleChange } = props;
  return (
    <>
      <div className="form-group col-md-3 col-sm-12 col-xs-12 font-input-heads p-3 text-primary">
        <label htmlFor="inputAmount">Amount</label>
        <input
          required
          type="number"
          maxlength="4"
          min="1"
          max="9999"
          name="amount"
          value={amount}
          onChange={e => handleChange(e)}
          className="form-control required"
          id="inputAmount"
          placeholder="Enter amount to be converted.."
        />
      </div>
    </>
  );
};

export default InputAmount;
