import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  listOfStocks() {
    let stocks = [...this.props.stocks];
    
    if(this.props.radioValue === "Alphabetically") {
      stocks = stocks.sort((a, b) => a.name.localeCompare(b.name))
    } else if(this.props.radioValue === "Price") {
      stocks = stocks.sort((a, b) => b.price - a.price)
    }

    if(this.props.selectValue === "Tech") {
      stocks = stocks.filter(stock => stock.type === "Tech")
    } else if(this.props.selectValue === "Sportswear") {
      stocks = stocks.filter(stock => stock.type === "Sportswear")
    } else if(this.props.selectValue === "Finance") {
      stocks = stocks.filter(stock => stock.type === "Finance")
    }

    return stocks.map(stock => {
      return <Stock handleBuyStock={this.props.handleBuyStock} stock={stock}/>
    });
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.listOfStocks()}
      </div>
    );
  }

}

export default StockContainer;
