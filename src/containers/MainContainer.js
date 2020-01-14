import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    selectValue: '',
    radioValue: '',
    savedStocks: [],
    stocks: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocks => this.setState({ stocks }))
  }

  handleBuyStock = (id) => {
    let newStock = this.state.stocks.find(stock => stock.id === id)
    let savedStocks = [...this.state.savedStocks, newStock];
    this.setState({ savedStocks });
  }

  handleSellStock = (id) => {
    let savedStocks = this.state.savedStocks.filter(stock => stock.id !== id);
    this.setState({ savedStocks });
  }

  handleRadio = (e) => {
    this.setState({ radioValue: e.target.value });
  }

  handleSelect = (e) => {
    this.setState({ selectValue: e.target.value })
  }

  render() {
    
    return (
      <div>
        <SearchBar
          radioValue={this.state.radioValue}
          handleRadio={this.handleRadio}
          handleSelect={this.handleSelect}
        />

          <div className="row">
            <div className="col-8">
              <StockContainer
                selectValue={this.state.selectValue}
                radioValue={this.state.radioValue}
                handleClick={this.handleBuyStock}
                stocks={this.state.stocks}
              />
            </div>
            <div className="col-4">
              <PortfolioContainer
                handleClick={this.handleSellStock}
                savedStocks={this.state.savedStocks}
              />
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
