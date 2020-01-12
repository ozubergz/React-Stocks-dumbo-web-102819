import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input 
          type="radio" 
          value="Alphabetically" 
          checked={props.radioValue === 'Alphabetically'? true : false} 
          onChange={props.handleRadio}/>
        Alphabetically
      </label>
      <label>
        <input 
          type="radio" 
          value="Price" 
          checked={props.radioValue === 'Price'? true : false}
          onChange={props.handleRadio}
        />
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.handleSelect}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
