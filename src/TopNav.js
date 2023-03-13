import React, { useState, useEffect } from 'react';
import { d1, d2, d3 } from '../constants/constants';

function TopNav({ setShowFiltered, setShowList, setColorHex, colorHex, allColors, setAllColors, hex, setHex, tempAllColors, setTempAllColors }) {
  
  const [search, setSearch] = useState('Search');
  let tempArr = [];

  useEffect(()=> {
    for(let i = 0; i < allColors.length; i++) {
      const el = allColors[i];
      if( el.colorHex.slice(0, search.length) == search.toLowerCase() ||
      el.colorHex.slice(0, search.length) == search.toUpperCase()) {
        console.log('match')
        tempArr.push(allColors[i]);
      }
    }
    setAllColors(tempArr);
  }, [search])

  function filterColor(e) {
    setAllColors(tempAllColors)
    setSearch(e.target.value);
  }
  return (
    <div id='TopNav'>
      <a href='https://www.helpfulhuman.com/' >
      <svg width='52px' height='52px' viewBox='0 0 52 52' version='1.1'>
        <g fill='#fff'>
          <path d={d1} id='Fill-3'></path>
          <path d={d2} id='Fill-6'></path>
          <path d={d3} id='Fill-8'></path>
        </g>
      </svg>
      </a>
      <form>
        <label htmlFor='search'></label>
        <input
          onChange={filterColor}
          onClick={() => setSearch('')}
          id='search'
          value={search}
        />
      </form>
    </div>
  );
}

export default TopNav;
