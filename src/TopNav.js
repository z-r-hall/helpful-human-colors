import React, { useState } from 'react';
import { d1, d2, d3 } from '../constants/constants';

function TopNav({ setShowFiltered, setShowList, setColorHex, allColors }) {
  const [hex, setHex] = useState('Search');

  function filterColor(e) {
    setHex(e.target.value);
    console.log('all', allColors);
    const filtered = allColors.filter(
      (el) =>
        el.colorHex.slice(0, hex.length) === hex.toLowerCase() ||
        el.colorHex.slice(0, hex.length) === hex.toUpperCase()
    );
    setColorHex(filtered);
    setShowFiltered(true);
    setShowList(false);
    if (hex.length === 0) {
      setShowFiltered(false);
      setShowList(true);
    }
  }
  return (
    <div id='TopNav'>
      <svg width='52px' height='52px' viewBox='0 0 52 52' version='1.1'>
        <g fill='#fff'>
          <path d={d1} id='Fill-3'></path>
          <path d={d2} id='Fill-6'></path>
          <path d={d3} id='Fill-8'></path>
        </g>
      </svg>
      <form>
        <label htmlFor='search'></label>
        <input
          onChange={filterColor}
          onClick={() => setHex('')}
          id='search'
          value={hex}
        />
      </form>
    </div>
  );
}

export default TopNav;
