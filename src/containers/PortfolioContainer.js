import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  
  renderListStocks() {
    if (this.props.savedStocks.length !== 0)
      return this.props.savedStocks.map(stock => {
        return (
            <Stock
              portfolioList={'portfolioList'}
              handleSellStock={this.props.handleSellStock}
              stock={stock}
            />
          )
      });
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.renderListStocks()}
      </div>
    );
  }

}

export default PortfolioContainer;
