import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = {
    quote: "",
  };

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote = () => {
    let randomNo = Math.floor(Math.random() * 1643);
    axios
      .get("https://type.fit/api/quotes ")
      .then((response) => {
        const quote = response.data[randomNo].text;
        this.setState({ quote });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { quote } = this.state;
    return (
      <div className="app">
        <h1 className="title">RANDOM QUOTES</h1>
        <div className="card">
          <h1 className="heading">{quote}</h1>
        </div>
        <button className="button" onClick={this.fetchQuote}>
          Generate a Quote
        </button>
      </div>
    );
  }
}

export default App;
