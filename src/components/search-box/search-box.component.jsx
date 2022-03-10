import React from 'react';
import './search-box.style.css';


export const SearchBox = ({placeholder, handleChange}) => {
  return (
    <input 
      type="search" 
      className="search-box"
      placeholder={placeholder}
      name="search" 
      onChange={handleChange}
    />
  );
};