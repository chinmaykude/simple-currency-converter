import React, { Component } from "react";
import InputAmount from "./InputAmount";
import ConversionLogo from "./ConversionLogo";
import ConversionButton from "./ConversionButton";
import DisplayResult from "./DisplayResult";
import CurrencyToConvertFrom from "./CurrencyToConvertFrom";
import CurrencyToConvertTo from "./CurrencyToConvertTo";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      amount: 1,
      error: null,
      isLoading: false,
      currencies_data: {},
      from_currency: "",
      to_currency: "",
      conversion_result: "",
      displayResult: false,
      flip_currencies: false
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    fetch(`https://free.currconv.com/api/v7/currencies?apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          currencies_data: response.results,
          from_currency: "USD",
          to_currency: "INR",
          isLoaded: true
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: false,
          error
        });
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      displayResult: false
    });
  };

  handleClick = () => {
    const { from_currency, to_currency, amount } = this.state;
    if (!amount || amount <= 0) {
      return alert("Please enter valid amount to proceed..!!");
    }
    this.setState({
      from_currency,
      to_currency,
      displayResult: false
    });

    this.fetchCurrencyValue(from_currency, to_currency);
  };

  fetchCurrencyValue = (from_currency, to_currency) => {
    this.setState({
      isLoading: true
    });
    const API_KEY = process.env.REACT_APP_API_KEY;
    const currency_value =
      "https://free.currconv.com/api/v7/convert?q=" +
      from_currency +
      "_" +
      to_currency +
      `&compact=ultra&apiKey=${API_KEY}`;

    fetch(currency_value)
      .then(res => res.json())
      .then(res =>
        this.setState({
          displayResult: true,
          conversion_result: Object.values(res),
          isLoading: false
        })
      )
      .then(error => {
        this.setState({
          isLoading: false,
          error: error
        });
      });
  };

  handleFlip = () => {
    const { from_currency, to_currency } = this.state;
    this.setState({
      from_currency: to_currency,
      to_currency: from_currency,
      displayResult: false
    });
    console.log(this.state);
  };

  render() {
    const {
      currencies_data,
      amount,
      conversion_result,
      from_currency,
      to_currency,
      displayResult,
      isLoading
    } = this.state;

    let currencyData = Object.values(currencies_data);
    const calculateConversionAmount = (amount, conversion_result) =>
      (amount * conversion_result).toFixed(3);

    let conversion_display_result = calculateConversionAmount(
      amount,
      conversion_result
    );

    return (
      <>
        <div className="container mt-2">
          <div className="form">
            <div className="form-row">
              <InputAmount amount={amount} handleChange={this.handleChange} />

              <CurrencyToConvertFrom
                event={this.event}
                from_currency={this.state.from_currency}
                onChange={this.handleChange}
                currencyData={currencyData}
              />

              <ConversionLogo handleFlip={this.handleFlip} />

              <CurrencyToConvertTo
                to_currency={this.state.to_currency}
                onChange={this.handleChange}
                currencyData={currencyData}
              />

              <ConversionButton handleClick={this.handleClick} />
            </div>
          </div>

          <DisplayResult
            amount={amount}
            from_currency={from_currency}
            conversion_display_result={conversion_display_result}
            to_currency={to_currency}
            displayResult={displayResult}
            isLoading={isLoading}
          />
        </div>
      </>
    );
  }
}
export default Home;
