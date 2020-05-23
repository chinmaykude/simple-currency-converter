import React from "react";
import { v4 as uuidv4 } from "uuid";

const SelectField = props => {
  const { name, value, onChange, id, className, currencyData } = props;
  return (
    <>
      <select
        name={name}
        value={value}
        onChange={onChange}
        id={id}
        className={className}
      >
        {currencyData.map(e => (
          <option value={e.id} key={uuidv4()}>
            {e.currencySymbol
              ? e.currencyName + " - " + e.currencySymbol + e.id
              : e.currencyName + " - " + e.id}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectField;
