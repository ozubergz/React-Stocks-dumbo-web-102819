import React from 'react'

const Stock = (props) => (

  <div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          {props.stock.name}
        </h5>
        <p className="card-text">
          {props.stock.price}
        </p>
      </div>
      {
        !props.portfolioList ? 
          <button onClick={() => props.handleBuyStock(props.stock)}>Buy</button> :
          <button onClick={() => props.handleSellStock(props.stock.id)}>Sell</button>
      }
     
    </div>
  </div>
);

export default Stock
