import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark text-center">
        <p class="navbar-brand text-align-center p-3 text-white logo-font col-12 mb-0 text-white text-wrap nav">
          Simple Currency Converter <br />
          <span class="font-input-heads text-wrap">
            Real-time Currency Conversion for 166 World Currencies
          </span>
        </p>
      </nav>
    </>
  );
};

export default Navbar;
